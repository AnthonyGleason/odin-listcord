import React from 'react';

//import css
import '../styles/content.css';

//import components
import ContentTrending from './Content/ContentTrending';
import ContentPopular from './Content/ContentPopular';
import ContentSidebar from './Content/ContentSidebar';

export default function Content(){
  return(
    <div className='content'>
      <ContentTrending />
      <ContentSidebar />
      <ContentPopular />
    </div>
  )
};