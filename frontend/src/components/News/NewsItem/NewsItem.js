import React from 'react';
import "./NewsItem.css";

const NewsItem = (props) => {
    return (
        <div className="news-item">
            <div className="news-text"> {props.text}
            <div> Source: {props.source} </div>
            <a href={props.link}> Link</a>
            </div>
            <img src={props.image} alt="" className="news-img" />  
        </div>
       
    )
}

export default NewsItem;
