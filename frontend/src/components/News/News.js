import React, { useState, useEffect } from "react";
import axios from "axios";
import "./News.css";
import NewsItem from "./NewsItem/NewsItem";
// import newimg from "./spot-dotted-line-1.png";

export default function NewsData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios(
      "https://newsapi.org/v2/everything?q=crypto&sortBy=publishedAt&apiKey=71675d18097b497f9d43e5ebda2734f6&lang=en"
    )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return "Loading News...";
  if (error) return "Error!";

  
  return (
    <div>
      {/* <div><img class="design-img" alt="design-images" src={newimg}></img></div>  */}
      <div className="news-box">
      {data.articles.map((news) => {
        return (
        <NewsItem 
        text={news.title}
        source={news.source.name}
        link={news.url}
        description={news.description}
        image={news.urlToImage}
    />
    );
  })}
        </div>
        </div>
  
  );
}