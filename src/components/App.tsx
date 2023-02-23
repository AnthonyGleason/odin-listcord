import React, {useEffect, useState} from "react";
import {collection, addDoc , getDocs,query,where} from 'firebase/firestore';
import {database} from '../firebaseConfig';
import ChannelContainer from './ChannelContainer';
import ChannelClass from "../classes/Channel";
import Message from "../classes/Message";
import userEvent from "@testing-library/user-event";
import MessageContainer from "./MessageContainer";

export default function App({currentUser,setCurrentUser}:any){
  //messages are retrieved dependening on selectedChannel
  //set channel, selected channel and message array states;
  const [channelArray,setChannelArray]=useState([]);
  const [selectedChannel,setSelectedChannel]=useState('none');
  const [messageArray,setMessageArray]=useState([]);
  const [newMessageInput, setNewMessageInput] = useState('');

  useEffect(()=>{
    setMessageArray([]);
    getMessages(selectedChannel,setMessageArray);
  },[selectedChannel]);

  useEffect(()=>{
    getChannels(currentUser,setChannelArray);
  },[currentUser]);

  return(
    <div className='app'>
      <div className="sidebar">
        <ChannelContainer setSelectedChannel={setSelectedChannel} channelArray={channelArray} />
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
            <MessageContainer messageArray={messageArray} key={Math.random()} />
            {/* allows the user to create new messages and sends them to the current selected channel or user */}
            <div className="message-footer">
              <input className='new-message-input' value={newMessageInput} onChange={(e)=>{setNewMessageInput(e.target.value)}} placeholder="Type a message here!"/>
              <button className='send-button' onClick={()=>{handleMessageSend(newMessageInput,currentUser,selectedChannel,setMessageArray)}}>Send</button>
            </div>
          </div>
        </div>
    </div>
  )
}

let handleMessageSend = function(message:string,currentUser:any,selectedChannel:string,setMessageArray:any){
  addDoc(collection(database,'messages'),{
    channel: selectedChannel,
    text: message,
    user: currentUser.UID,
    username: currentUser.username,
  })
  //update state
  setMessageArray((prev:any)=>prev.concat([{
    channel: selectedChannel,
    text: message,
    user: currentUser.UID,
    username: currentUser.username,
  }]))
};

let getMessageInfo = async function(messageQuery:any,setMessageArray: any){
  let response: any = await getDocs(messageQuery);
  response.docs.map((r:any)=>{
    setMessageArray((prev:any)=>prev.concat([{
      channel: r.data().channel,
      text: r.data().text,
      user: r.data().user,
      username: r.data().username,
    }]))
  })
}

let getMessages = function(selectedChannel: string, setMessageArray: any){
  let messageQuery = query(collection(database,'messages'),where('channel','==',selectedChannel));
  getMessageInfo(messageQuery,setMessageArray);
}

let getChannelInfo = async function(channelQuery:any,setChannelArray: any){
  let response:any = await getDocs(channelQuery);
  response.docs.map((r:any)=>{
    setChannelArray((prev:any)=>prev.concat([{
      channelName: r.data().channelName,
      messageArray: r.data().messageArray,
      userArray: r.data().userArray,
    }]))
  })
};

let getChannels = function(user: any,setChannelArray:any){
  user.joinedChannels.forEach((channelDocID: string)=>{
    let channelQuery = query(collection(database,'channels'), where('__name__','==',channelDocID));
    getChannelInfo(channelQuery,setChannelArray);
  });
};