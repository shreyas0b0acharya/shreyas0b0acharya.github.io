import React, { useEffect, useState } from "react";
import { Card } from "../components/ui/card";
import { MainComp } from "../layouts/mainComp";

const branchKeywords = {
  CSE: "computer+science+engineering", // Basic CSE focus
  ECE: "electronics+communication+engineering", // Core ECE topics
  EEE: "electrical+electronics+engineering", // Essential EEE focus
  ME: "mechanical+engineering", // Core ME topics
  CE: "civil+engineering" // Basic CE keywords
};


const NewsCard = ({ title, description, link, pubDate, source, image_url }) => {
  return (
    <Card className="bg-white flex flex-col hover:shadow-lg transition">
      {image_url && (
        <img src={image_url} alt={title} className="w-full h-48 object-cover rounded-xl mb-4" />
      )}
      <h2 className="text-xl font-semibold mb-2 text-gray-800 line-clamp-2">{title}</h2>
      <p className="text-sm text-gray-600 line-clamp-3 mb-4">{description}</p>
      <div className="mt-auto text-sm text-gray-400">
        <p>{new Date(pubDate).toLocaleDateString()} • {source}</p>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 mt-2 hover:underline text-sm"
      >
        Read more ↗
      </a>
    </Card>
  );
};

export const News = () => {
  const [news, setNews] = useState([]);
  const [branch, setBranch] = useState(localStorage.getItem("Branch"));

  useEffect(() => {
    setBranch(localStorage.getItem("Branch"));
  }, []); 

  const query = branchKeywords[branch];

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          `https://newsdata.io/api/1/news?apikey=pub_810073fe924b355abfc8c8dd5412732f9f92b&q=${query}&language=en&category=technology
`
        );
        const data = await res.json();
        setNews(data.results);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [query]);

  return (
    <MainComp>
        <div className="min-h-screen bg-themeColor dark:bg-black py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">Latest {branch} News</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>
      </div>
    </MainComp>
    
  );
};
