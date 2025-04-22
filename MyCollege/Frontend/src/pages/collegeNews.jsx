import React, { useEffect, useState } from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/ButtonComp";
import { Pencil, Trash, ThumbsUp } from "lucide-react";
import { backendAddress } from "../backendAddres";
import { Input, TextArea } from "../components/Input";

// CollegeNews component
export const CollegeNews = () => {
    const [isAdmin, setIsAdmin] = useState(false);             
    const [newsList, setNewsList] = useState([]);              // List of all news
    const [newTitle, setNewTitle] = useState("");              
    const [newContent, setNewContent] = useState("");        

    //  check if user is admin.
    useEffect(() => {
        const storedEmail = localStorage.getItem("email");
        setIsAdmin(storedEmail === "shreyasb19386@gmail.com");
    }, []);

    // Load news from backend
    useEffect(() => {
        fetch(`${backendAddress}/newsData`)
            .then((res) => res.json())
            .then((data) => {
                setNewsList(data.map((n) => ({ ...n, editing: false, liked: false })));
            })
            .catch((err) => console.error("❌ Error loading news:", err));
    }, []);

    // Add new news item
    const handleAddNews = () => {
        if (newTitle === "" || newContent === "") {
            alert("Title and Content should not be empty.");
            return;
        }

        const newNews = {
            id: Date.now(),
            title: newTitle,
            content: newContent,
            likes: 0,
            editing: false,
            liked: false,
        };

        const updatedNewsList = [newNews, ...newsList];
        setNewsList(updatedNewsList);
        setNewTitle("");
        setNewContent("");
        sendNewsToBackend(updatedNewsList);
    };

    // Send updated news list to backend
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

    // Update a field news item
    const handleEdit = (id, field, value) => {
        setNewsList((prev) =>
            prev.map((news) => (news.id === id ? { ...news, [field]: value } : news))
        );
    };

    // Save edited news item to backend
    const saveEdit = (id) => {
        const updated = newsList.find((n) => n.id === id);

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

    // Delete news item
    const handleDelete = (id) => {
        fetch(`${backendAddress}/newsData/${id}`, {
            method: "DELETE",
        })
            .then(() => {
                setNewsList((prev) => prev.filter((n) => n.id !== id));
            })
            .catch((err) => console.error("❌ Error deleting news:", err));
    };

    // Like/Unlike a news item
    const handleLike = (id) => {
        setNewsList((prev) =>
            prev.map((n) => {
                if (n.id === id) {
                    const updatedLikes = n.liked ? n.likes - 1 : n.likes + 1;
                    const updated = { ...n, likes: updatedLikes, liked: !n.liked };

                    // Sync with backend
                    fetch(`${backendAddress}/newsData/${id}`, {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(updated),
                    }).catch((err) => console.error("Error updating like:", err));

                    return updated;
                }
                return n;
            })
        );
    };

    return (
        <div className="p-6 sm:w-[80%] sm:mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-black dark:text-white">Today's News</h1>

            {/* This Section is accesses to  Admin to add or edit news */}
            {isAdmin && (
                <div className="mb-6 space-y-2">
                    <Input
                        placeholder="Title"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                    <TextArea
                        placeholder="Content"
                        value={newContent}
                        onChange={(e) => setNewContent(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                    <Button onClick={handleAddNews}>Add News</Button>
                </div>
            )}

            {/* News list */}
            {newsList.map((news) => (
                <Card key={news.id} className="w-full mb-4 p-4">
                    {news.editing ? (
                        <div className="space-y-2">
                            <Input
                                value={news.title}
                                onChange={(e) => handleEdit(news.id, "title", e.target.value)}
                                className="w-full p-2 border rounded"
                                placeholder="Title"
                            />
                            <TextArea
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
                        <div>
                            <div className="flex flex-row justify-between gap-4 items-center">
                                <div>
                                    <h2 className="text-xl font-bold mb-2 text-black dark:text-white">{news.title}</h2>
                                    <p className="mb-2 text-black dark:text-white">{news.content}</p>
                                </div>
                                <Button onClick={() => handleLike(news.id)} size="sm" variant="ghost">
                                    <ThumbsUp className="h-4 w-4 mr-1" /> {news.likes}
                                </Button>
                            </div>

                            {/* Buttons only visible to Admin*/}
                            {isAdmin && (
                                <div className="flex items-center gap-2 mt-2">
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
                    )}
                </Card>
            ))}
        </div>
    );
};
