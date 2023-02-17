import React from 'react';

export default function Nav(){
  return(
    <div className='nav'>
      <img className='nav-logo' alt='gettit' />
      <div className='search-container'>
        <img className='search-icon' alt='search icon' />
        <input placeholder='Search Gettit' />
      </div>
      <button>Log In</button>
      <div className='nav-profile'>
        <img className='profile-picture' alt='profile' />
        <img className='profile-arrow' alt='down arrow' />
      </div>
      <ul className='nav-drop-down'>
        <li className='nav-drop-item'>Toggle Dark Mode</li>
        <li className='nav-drop-item'>Log In / Sign Up</li>
      </ul>
    </div>
  )
};