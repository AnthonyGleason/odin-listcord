import React from 'react';

export default function MessageContainer({messageArray}:any){
  return(
    <div className="message-container">
    {/* Messages show the authors profile picture, name, timestamp and message content */}
    {
        messageArray.map((message:any)=>{
          return(
          <div key={Math.random()} className="message">
            <img className="message-profile-pic" alt="message profile pic"/>
            <div className="message-author">{message.username}</div>
            <div className="message-content">{message.text}</div>
          </div>)
        })
      }
    </div>
  )
};