import React from "react";
import ContentItem from "./ContentItem/ContentItem";

//import images
import top from '../../assets/top.svg';
import latest from '../../assets/latest.svg';

export default function ContentPopular(){
  return(
    <div className='content-popular'>
      <ul className='popular-nav'>
        <li className='popular-nav-item'>
          <img className='popular-nav-top-icon' alt='nav top' src={top} />
          <div className='popular-nav-top-text'>Top</div>
        </li>
        <li className='popular-nav-item'>
          <img className='popular-nav-latest-icon' alt='nav new' src={latest} />
          <div className='popular-nav-latest-text'>Latest</div>
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