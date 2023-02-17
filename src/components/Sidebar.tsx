import React from 'react';

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