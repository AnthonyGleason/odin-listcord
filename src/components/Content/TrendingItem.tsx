import React from "react";

import placeholder from '../../assets/placeholder.png';

export default function TrendingItem(){
  return(
    <div className='trending-item'>
      <div className="trending-title">trending title</div>
      <img className='trending-img' src={placeholder} alt='placeholder' />
      <div className="trending-text">trending text</div>
    </div>
  )
};