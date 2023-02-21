import React from 'react';
import {useState} from 'react';
import ChannelItem from './ChannelItem';

export default function ChannelContainer(){
  const [channelInput,setChannelInput] = useState('');

  return(
    <div className='channel-container'>
    {/*map is called on a channel item container to render channel items the user participates in*/}
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      {/* this unique channel item allows for creation of new channels which are searchable by other users */}
      <div className="channel-item">
        <div className="channel-new">+</div>
        <div className="fade">
          <form className="find-channel">
            <input value={channelInput} onChange={(e)=>{setChannelInput(e.target.value)}} className="find-channel-input" placeholder="Enter a channel" />
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