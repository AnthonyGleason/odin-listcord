import React from 'react';
import placeholderPic from '../assets/placeholder.png';
export default function ChannelItem(){
  return(
    <div className="channel-item">
      <img src={placeholderPic} className="channel-picture" alt="channel" />
      <div className="channel-name">Channel Item</div>
    </div>
  )
}