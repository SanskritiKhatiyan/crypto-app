import React, { useState, useEffect } from "react";
import axios from "axios";
import "./News.css";
import NewsItem from "./NewsItem/NewsItem";
import { CircularProgress } from "@material-ui/core";

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

  if (loading)
    return (
      <CircularProgress
        style={{
          color: "#003366",
          marginLeft: "42vw",
          marginTop: "11vw",
          marginBottom: "40vh",
        }}
        size={200}
        thickness={1.5}
      />
    );
  if (error) return "Error!";

  return (
    <div className="news-container">
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
