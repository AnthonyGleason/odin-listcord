import React from 'react';
import placeholderPic from '../assets/placeholder.png';
export default function DMItem(){
  return(
    <div className="dm-item">
      <img src={placeholderPic} className="dm-user-pic" alt='a user added account img' />
      <div className="dm-user-acc">A User</div>
    </div>
  )
}