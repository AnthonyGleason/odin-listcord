import React, {useEffect, useState} from "react";
import {collection, addDoc , getDocs,query,where} from 'firebase/firestore';
import {database} from '../firebaseConfig';
import ChannelContainer from './ChannelContainer';
import MessageContainer from "./MessageContainer";
import '../styles/App.css';

export default function App({currentUser,setCurrentUser}:any){
  //messages are retrieved dependening on selectedChannel
  //set channel, selected channel and message array states;
  const [channelArray,setChannelArray]=useState([]);
  const [selectedChannel,setSelectedChannel]=useState('Gaming');
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
      <ChannelContainer selectedChannel={selectedChannel} setSelectedChannel={setSelectedChannel} channelArray={channelArray} currentUser={currentUser} />
      <ul className="rules">
        <li>Channel Rules:</li>
        <li>Be respectful to others</li>
        <li>Keep the Conversation Appropriate</li>
        <li>Do Not Share Any Personal Information With Other Members</li>
      </ul>
      <div className="content">
          <div className="content-nav">
            {/* Displays either the selected channel or current user */}
            <div className="nav-title">{selectedChannel} Channel</div>
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
  //update state
  setMessageArray((prev:any)=>prev.concat([{
    channel: selectedChannel,
    text: message,
    user: currentUser.UID,
    username: currentUser.username,
    time: new Date(),
  }]))

  addDoc(collection(database,'messages'),{
    channel: selectedChannel,
    text: message,
    user: currentUser.UID,
    username: currentUser.username,
    time: new Date(),
  })
  
};

let getMessageInfo = async function(messageQuery:any,setMessageArray: any){
  let response: any = await getDocs(messageQuery);
  response.docs.map((r:any)=>{
    setMessageArray((prev:any)=>prev.concat([{
      channel: r.data().channel,
      text: r.data().text,
      user: r.data().user,
      username: r.data().username,
      time: r.data().time.toDate(),
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
    }]))
  })
};

let getChannels = function(user: any,setChannelArray:any){
  user.joinedChannels.forEach((channelDocID: string)=>{
    let channelQuery = query(collection(database,'channels'), where('__name__','==',channelDocID));
    getChannelInfo(channelQuery,setChannelArray);
  });
};