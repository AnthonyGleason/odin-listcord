import React from 'react';

export default function Channel({setSelectedChannel,channelName}: any){
  return(
    <div className="channel-item">
      <div onClick={()=>{setSelectedChannel(channelName)}} className="channel-name">{channelName}</div>
    </div>
  )
}