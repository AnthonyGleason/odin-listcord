import React from 'react';
//import components
import ContentItemSidebar from './ContentItemSidebar';
import ContentItemNav from './ContentItemNav';
import ContentItemBody from './ContentItemBody';

export default function ContentItem(){
  return(
    <div className='content-item'>
      <ContentItemSidebar />
      <ContentItemNav />
      <ContentItemBody />
    </div>
  )
}