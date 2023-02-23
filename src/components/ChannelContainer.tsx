import React from 'react';
import Channel from '../components/Channel';
export default function ChannelContainer({setSelectedChannel,channelArray}:any){
  console.log(channelArray);
  return(
    <div className="channel-container">
      {
        channelArray.map((channel:any)=>{
          return(<Channel setSelectedChannel={setSelectedChannel} channelName={channel.channelName} key={Math.random()} />)
        })
      }
      {/* this unique channel item allows for creation of new channels which are searchable by other users */}
      <div className="channel-item">
        <img className="channel-picture" alt="plus, add symbol" />
        <div className="channel-name">New Channel</div>
        <div className="fade">
          <form className="find-channel">
            <input className="find-channel-input" placeholder="Enter a channel" />
            <div className="find-channel-message">
              {/* Displays error messages such as channel doesn't exist */}
            </div>
            <button className="find-channel-submit">Search</button>
            <button className="find-channel-close">Close</button>
          </form>
        </div>
      </div>
    </div>
  )
}