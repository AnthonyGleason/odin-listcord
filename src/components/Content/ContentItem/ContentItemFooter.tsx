import React from 'react';

//import images
import comment from '../../../assets/comment.svg';
import share from '../../../assets/share.svg';
import save from '../../../assets/save.svg';

export default function ContentItemFooter(){
  return(
    <div className='content-item-footer'>
      <div className='content-item-footer-comments'>
        <img className='content-item-comments-img' alt='chat bubble' src={comment} />
        <div className='content-item-comments-count'>0 Comments</div>
      </div>
      <div className='content-item-share'>
        <img className='content-item-share-img' alt='share' src={share} />
        <div className='content-item-share-text'>Share</div>
      </div>
      <div className='content-item-save'>
        <img className='content-item-save-img' alt='save' src={save} />
        <div className='content-item-save-text'>Save</div>
      </div>
    </div>
  )
}