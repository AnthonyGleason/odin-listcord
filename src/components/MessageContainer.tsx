import React from 'react';

export default function MessageContainer({messageArray}:any){
  if (messageArray[0]===undefined) return(<div className='message-container'></div>);
  return(
    <div className="message-container">
    {/* Messages show the authors profile picture, name, timestamp and message content */}
    {
        messageArray.map((message:any)=>{
          return(
          <div key={Math.random()} className="message">
            <div className="message-author">{message.username}</div>
            <div className="message-content">{message.text}</div>
            <div className='message-timestamp'>{message.time.toString()}</div>
          </div>)
        })
      }
    </div>
  )
};