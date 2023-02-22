import React from 'react';

export default function Channel({channelName}: any){
  return(
    <div className="channel-item">
      <div className="channel-name">{channelName}</div>
    </div>
  )
}