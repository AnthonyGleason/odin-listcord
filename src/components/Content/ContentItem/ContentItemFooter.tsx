import React from 'react';

export default function ContentItemFooter(){
  return(
    <div className='content-item-footer'>
      <div className='content-item-footer-comments'>
        <img className='content-item-comments-img' alt='chat bubble' />
        <div className='content-item-comments-count'>0 Comments</div>
      </div>
      <div className='content-item-share'>
        <img className='content-item-share-img' alt='share' />
        <div className='content-item-share-text'>Share</div>
      </div>
      <div className='content-item-save'>
        <img className='content-item-save-img' alt='save' />
        <div className='content-item-save-text'>Save</div>
      </div>
    </div>
  )
}