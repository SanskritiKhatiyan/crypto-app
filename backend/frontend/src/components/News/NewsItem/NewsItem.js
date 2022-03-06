import React from 'react';
import "./NewsItem.css";

const NewsItem = (props) => {
    return (
        <div className="news-item">
            <div className="news-text">
            <a id="news-title" href={props.link}> {props.text}</a>
            {/* <div  id="news-title"> {props.text}</div> */}
            <div className="news-desc" href={props.link}> {props.description}........ </div>
            <div className="news-source"> {props.source} </div>

            {/* <a href={props.link}> Link</a> */}
            </div>
            <img className="news-img" src={props.image} alt=""  />
        </div>
       
    )
}

export default NewsItem;
