import React from 'react';

//import css
import '../styles/sidebar.css';
//import components
import SidebarAccount from './Sidebar/SidebarAccount';
import SidebarFeed from './Sidebar/SidebarFeed';

export default function Sidebar(){
  return(
    <div className='sidebar'>
      <SidebarAccount />
      <SidebarFeed />
    </div>
  )
};