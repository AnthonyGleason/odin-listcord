import React from 'react';

//import images
import upvote from '../../../assets/voteArrowUp.svg';
import downvote from '../../../assets/voteArrowDown.svg';

export default function ContentSidebar(){
  return(
    <div className='content-item-sidebar'>
      <img alt='upvote' className='content-upvote' src={upvote} />
      <div className='content-vote-count'>0</div>
      <img alt='downvote' className='content-downvote' src={downvote} />
    </div>
  )
}