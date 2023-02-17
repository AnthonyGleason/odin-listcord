import React from "react";
import ContentItem from "./ContentItem/ContentItem";
export default function ContentPopular(){
  return(
    <div className='content-popular'>
      <ul className='popular-nav'>
        <li className='popular-nav-item'>
          <img className='popular-nav-top-icon' alt='nav top' />
          <div className='popular-nav-top-text'>Top</div>
        </li>
        <li className='popular-nav-item'>
          <img className='popular-nav-new-icon' alt='nav new' />
          <div className='popular-nav-new-text'>New</div>
        </li>
      </ul>
      <div className='content-item-container'>
        <ContentItem />
        <ContentItem />
        <ContentItem />
        <ContentItem />
      </div>
    </div>
  )
};