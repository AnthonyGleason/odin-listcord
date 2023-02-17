import React from 'react';
//import components
import ContentSidebar from '../ContentSidebar';
import ContentItemNav from './ContentItemNav';
import ContentItemBody from './ContentItemBody';
export default function ContentItem(){
  return(
    <div className='content-item'>
      <ContentSidebar />
      <ContentItemNav />
      <ContentItemBody />
    </div>
  )
}