import React from 'react';
import '../styles/content.css';

export default function Content(){
  return(
    <div className="content">
      <div className="content-nav">
        {/* Displays either the selected channel or current user */}
        <div className="nav-title">Channel / User Name</div>
        {/* 
          Renders button text condtionally based on if the current selection is a DM or channel.
          Allows the user to close dm or leave channel.
        */}
        <button>Close DM / Leave Channel</button>
      </div>
      <div className="content-body">
        {/* Displays all messages in the channel*/}
        <div className="message-container">
          {/* Messages show the authors profile picture, name, timestamp and message content */}
          <div className="message">
            <img className="message-profile-pic" alt="message profile pic"/>
            <div className="message-author">Admin</div>
            <div className="message-timestamp">02/20/2023 3:09pm</div>
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
  )
}