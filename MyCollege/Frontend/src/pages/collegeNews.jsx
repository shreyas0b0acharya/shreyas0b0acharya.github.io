import React, { useEffect, useState } from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/ButtonComp";
import { Pencil, Trash, ThumbsUp } from "lucide-react";
import { backendAddress } from "../backendAddres";



export const CollegeNews = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [newsList, setNewsList] = useState([]);
    const [newTitle, setNewTitle] = useState("");
    const [newContent, setNewContent] = useState("");


    // ✅ Check for admin 
    useEffect(() => {
        const storedEmail = localStorage.getItem("email");
        storedEmail === "shreyasb19386@gmail.com" ? setIsAdmin(true) : setIsAdmin(false);
    }, []);

    useEffect(() => {
        fetch(`${backendAddress}/newsData`)
            .then((res) => res.json())
            .then((data) => {
               setNewsList(data.map((n) => ({ ...n, editing: false })));
            })
            .catch((err) => console.error("❌ Error loading news:", err));
    }, []);

    const handleAddNews = () => {
      if (newTitle==="" || newContent===""){
        alert("Title and Content should not be empty.")
        return
      }
      const newNews = {
        id: Date.now(),
        title: newTitle,
        content: newContent,
        likes: 0,
        editing: false,
      };
    
      const updatedNewsList = [ newNews , ...newsList]; // ✅ manually create updated list
      
      setNewContent("");
      setNewTitle("");
      setNewsList(updatedNewsList); // update UI
      sendNewsToBackend(updatedNewsList); // send latest list directly
    };
    
    const sendNewsToBackend = async (newsListToSend) => {
      try {
        const res = await fetch(`${backendAddress}/newsData`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newsListToSend),
        });
    
        if (!res.ok) throw new Error('Server error');
        console.log('News sent successfully');
      } catch (err) {
        console.error('Error sending news:', err);
      }
    };


    const handleEdit = (id, field, value) => {
      setNewsList((prev) =>
        prev.map((news) => (news.id === id ? { ...news, [field]: value } : news))
      );
    };



    const saveEdit = (id) => {
      const updated = newsList.find((n) => n.id === id);
      console.log(id);
    
      fetch(`${backendAddress}/newsData/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      })
        .then(() => {
          setNewsList((prev) =>
            prev.map((n) => (n.id === id ? { ...n, editing: false } : n))
          );
        })
        .catch((err) => console.error("❌ Error saving edit:", err));
    };
  
    const handleDelete = (id) => {
      fetch(`${backendAddress}/newsData/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          setNewsList((prev) => prev.filter((n) => n.id !== id));
        })
        .catch((err) => console.error("❌ Error deleting news:", err));
    };

    const handleLike = (id) => {
      setNewsList((prev) =>
        prev.map((n) => (n.id === id ? { ...n, likes: n.likes + 1 } : n))
      );
    
      const updated = newsList.find((n) => n.id === id);
      fetch(`${backendAddress}/newsData/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...updated, likes: updated.likes + 1 }),
      }).catch((err) => console.error("❌ Error liking news:", err));
    };
  

    return (
        <div className="p-6 s sm:w-[80%] sm:mx-auto">
            <h1 className="text-2xl font-bold mb-6">Today's News</h1>
    
            {isAdmin && (
                <div className="mb-6 space-y-2">
                    <input
                        placeholder="Title"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                    <textarea
                        placeholder="Content"
                        value={newContent}
                        onChange={(e) => setNewContent(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                    <Button onClick={handleAddNews}>Add News</Button>
                </div>
            )}
    
            {newsList.map((news) => (
                <Card key={news.id} className="w-full mb-4 p-4">
                  {news.editing ? (
                    <div className="space-y-2">
                      <input
                        value={news.title}
                        onChange={(e) => handleEdit(news.id, "title", e.target.value)}
                        className="w-full p-2 border rounded"
                        placeholder="Title"
                      />
                      <textarea
                        value={news.content}
                        onChange={(e) => handleEdit(news.id, "content", e.target.value)}
                        className="w-full p-2 border rounded"
                        placeholder="Content"
                      />
                      <Button
                        onClick={() => {
                          handleEdit(news.id, "editing", false);
                          saveEdit(news.id);
                        }}
                      >
                        Save
                      </Button>
                    </div>
                  ) : (
                    <div >
                      <div className="flex flex-row justify-between">
                          <div>
                              <h2 className="text-xl font-bold mb-2">{news.title}</h2>
                              <p className="mb-2">{news.content}</p>
                          </div>
                          <Button onClick={() => handleLike(news.id)} size="sm" variant="ghost">
                              <ThumbsUp className="h-4 w-4 mr-1" /> {news.likes}
                          </Button>
                      </div>
                      
                      
                      
                      <div className="flex items-center justify-between">
                        
                        {isAdmin && (
                          <div className="flex items-center gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleEdit(news.id, "editing", true)}
                            >
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => handleDelete(news.id)}
                            >
                              <Trash className="h-4 w-4" />
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </Card>
          
            ))}
        </div>
    );
}