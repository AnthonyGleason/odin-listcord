import React from 'react';

export default function SidebarFeed(){
  return(
    <ul className='feed-topic-container'>
      <li className='feed-heading'>Feeds</li>
      <li className='feed-popular'>
        <img className='feeds-popular-icon' alt='popular icon' />
        <div className='feeds-popular-text'>Popular</div>
      </li>
      <li className='topics-heading'>Topics</li>
      <li className='topics-gaming'>
        <img className='topics-gaming-icon' alt='gaming icon' />
        <div className='topics-gaming-text'>Gaming</div>
      </li>
      <li className='topics-sports'>
        <img className='topics-sports-icon' alt='sports icon' />
        <div className='topics-sports-text'>Sports</div>
      </li>
      <li className='topics-television'>
        <img className='topics-television-icon' alt='television icon' />
        <div className='topics-television-text'>Television</div>
      </li>
      <li className='topics-celebrity'>
        <img className='topics-celebrity-icon' alt='celebrity icon' />
        <div className='topics-celebrity-text'>Celebrity</div>
      </li>
    </ul>
  )
}