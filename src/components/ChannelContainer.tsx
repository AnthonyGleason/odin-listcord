import React from 'react';
import Channel from '../components/Channel';
export default function ChannelContainer({selectedChannel, setSelectedChannel,channelArray,currentUser}:any){
  return(
    <div className="channel-container">
      {
        channelArray.map((channel:any)=>{
          return(<Channel selectedChannel={selectedChannel} setSelectedChannel={setSelectedChannel} channelName={channel.channelName} key={Math.random()} />)
        })
      }
      <div className='current-user-info'>Welcome Back {currentUser.username}!</div>
    </div>
  )
}