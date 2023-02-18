import React from 'react';
import ContentItemFooter from './ContentItemFooter';

//import images
import placeholder from '../../../assets/placeholder.png';

export default function ContentItemBody(){
  return(
    <div className='content-item-body'>
      <div className='content-item-title'>A cool content title!</div>
      <img className='content-item-img' alt='content item' src={placeholder} />
      <ContentItemFooter />
    </div>
  )
}