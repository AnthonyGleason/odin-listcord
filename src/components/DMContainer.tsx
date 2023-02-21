import React from 'react';
import {useState} from 'react';

import placeholderPic from '../assets/placeholder.png';
//import components
import DMItem from './DMItem';

export default function DMContainer(){
  const [findUserInput,setFindUserInput] = useState('');

  return(
    <div className="dm-container">
      <div className="dm-nav">
        <div className="dm-title">Direct Messages</div>
        <div className="dm-new">+</div>
        <div className="fade">
          <form className="find-user">
            <input className="find-user-input" onChange={(e)=>{setFindUserInput(e.target.value)}} placeholder="Enter a username" />
            {/* Displays error messages such as user doesn't exist */}
            <div className="find-user-message"></div>
            <button className="find-user-submit">Search</button>
            <button className="find-user-close">Close</button>
          </form>
        </div>
      </div>
      <div className="dm-body">
        <DMItem />
        <DMItem />
        <DMItem />
      </div>
      <div className="dm-footer">
        <img src={placeholderPic} className="current-user-pic" alt="current user's added account img "/>
        <div className="current-username">Current signed in user</div>
      </div>
    </div>
  )
}