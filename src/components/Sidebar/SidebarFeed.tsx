import React from 'react';

//import images
import popular from '../../assets/popular.svg';
import gaming from '../../assets/gaming.svg';
import sports from '../../assets/sports.svg';
import tv from '../../assets/tv.svg';
import celebrity from '../../assets/celebrity.svg';

export default function SidebarFeed(){
  return(
    <ul className='feed-topic-container'>
      <li className='feed-heading'>Feeds</li>
      <li className='feed-popular'>
        <img className='feeds-popular-icon' alt='popular icon' src={popular} />
        <div className='feeds-popular-text'>Popular</div>
      </li>
      <li className='topics-heading'>Topics</li>
      <li className='topics-gaming'>
        <img className='topics-gaming-icon' alt='gaming icon' src={gaming} />
        <div className='topics-gaming-text'>Gaming</div>
      </li>
      <li className='topics-sports'>
        <img className='topics-sports-icon' alt='sports icon' src={sports} />
        <div className='topics-sports-text'>Sports</div>
      </li>
      <li className='topics-television'>
        <img className='topics-television-icon' alt='television icon' src={tv} />
        <div className='topics-television-text'>Television</div>
      </li>
      <li className='topics-celebrity'>
        <img className='topics-celebrity-icon' alt='celebrity icon' src={celebrity} />
        <div className='topics-celebrity-text'>Celebrity</div>
      </li>
    </ul>
  )
}