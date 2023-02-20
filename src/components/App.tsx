import React from "react";

//import components
import ChannelContainer from "./ChannelContainer";
import DMContainer from "./DMContainer";
import Content from './Content';

export default function App(){
  return(
    <div className='app'>
      <div className="sidebar">
        <ChannelContainer />
        <DMContainer />
      </div>
      <Content />
    </div>
  )
}