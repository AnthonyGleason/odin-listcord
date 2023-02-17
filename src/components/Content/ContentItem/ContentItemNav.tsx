import React from "react";

export default function ContentItemNav(){
  return(
    <div className='content-item-sidebar'>
      <img alt='upvote' className='content-upvote' />
      <div className='content-vote-count'>0</div>
      <img alt='downvote' className='content-downvote' />
    </div>
  )
}