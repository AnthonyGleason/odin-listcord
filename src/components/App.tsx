import React, {useEffect, useState} from "react";
import {collection, addDoc , getDocs,query,where} from 'firebase/firestore';
import {database} from '../firebaseConfig';
import ChannelContainer from './ChannelContainer';
import ChannelClass from "../classes/Channel";
import Message from "../classes/Message";
import { updateCurrentUser } from "firebase/auth";

export default function App({currentUser,setCurrentUser}:any){
  const [channelArray,setChannelArray]=useState([]);

  useEffect(()=>{
    getChannels(currentUser,setChannelArray);
  },[currentUser]);

  return(
    <div className='app'>
      <div className="sidebar">
        <ChannelContainer channelArray={channelArray} />
        <div className="sidebar-right">
          <div className="dm-container">
            <div className="dm-nav">
              <div className="dm-title">Direct Messages</div>
              <div className="dm-new">+</div>
              <div className="fade">
                <form className="find-user">
                  <input className="find-user-input" placeholder="Enter a username" />
                  <div className="find-user-message">
                    {/* Displays error messages such as user doesn't exist */}
                  </div>
                  <button className="find-user-submit">Search</button>
                  <button className="find-user-close">Close</button>
                </form>
              </div>
            </div>
            <div className="dm-body">
              <div className="dm-item">
                <img className="dm-user-pic" alt='a user added account img' />
                <div className="dm-user-acc">A User</div>
              </div>
              <div className="dm-item">
                <img className="dm-user-pic" alt='a user added account img' />
                <div className="dm-user-acc">A User</div>
              </div>
              <div className="dm-item">
                <img className="dm-user-pic" alt='a user added account img' />
                <div className="dm-user-acc">A User</div>
              </div>
            </div>
            <div className="dm-footer">
              <img className="current-user-pic" alt="current user's added account img "/>
              <div className="current-username">Current signed in user</div>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
          <div className="content-nav">
            {/* Displays either the selected channel or current user */}
            <div className="nav-title">Channel / User Name</div>
          </div>
          <div className="content-body">
            {/* Displays all messages in the channel*/}
            <div className="message-container">
              {/* Messages show the authors profile picture, name, timestamp and message content */}
              <div className="message">
                <img className="message-profile-pic" alt="message profile pic"/>
                <div className="message-author">Admin</div>
                <div className="message-send-time">02/20/2023 3:09pm</div>
                <div className="message-content">Hello World!</div>
              </div>
            </div>
            {/* allows the user to create new messages and sends them to the current selected channel or user */}
            <div className="message-footer">
              <input className='new-message-input' placeholder="Type a message here!"/>
              <button>Send</button>
            </div>
          </div>
        </div>
    </div>
  )
}

let getChannelInfo = async function(channelQuery:any,setChannelArray: any){
  let tempData:any;
  let response:any = await getDocs(channelQuery);
  response.docs.map((r:any)=>{
    setChannelArray([{
      channelName: r.data().channelName,
      messageArray: r.data().messageArray,
      userArray: r.data().userArray,
    }])
  })
  return tempData;
};

let getChannels = function(user: any,setChannelArray:any){
  //populate channelArray with doc ids
  user.joinedChannels.forEach((channelDocID: string)=>{
    let channelQuery = query(collection(database,'channels'), where('__name__','==',channelDocID));
    getChannelInfo(channelQuery,setChannelArray);
  });
};