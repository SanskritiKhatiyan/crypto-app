import React from 'react';
import "./NewsItem.css";

const NewsItem = (props) => {
    return (
        <div className="news-item">
            <div className="news-text">
            <a id="news-title" href={props.link}> {props.text}</a>
            {/* <div  id="news-title"> {props.text}</div> */}
            <div className="news-source"> {props.source} </div>
            {/* <a href={props.link}> Link</a> */}
            </div>
            <img src={props.image} alt="" className="news-img" />
        </div>
       
    )
}

export default NewsItem;
