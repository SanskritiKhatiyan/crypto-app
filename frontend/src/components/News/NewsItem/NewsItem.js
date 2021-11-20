import React from 'react';
import "./NewsItem.css";

const NewsItem = (props) => {
    return (
        <div className="news-item">
            <div className="news-text"> {props.text}
            <div> {props.source} </div>
            <div> {props.link}</div>
            </div>
            <div className="news-img">image </div>
        </div>
       
    )
}

export default NewsItem;
