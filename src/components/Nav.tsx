import React from 'react';

//import css
import '../styles/nav.css';

//import images
import navLogo from '../assets/gettitLogo.svg';
import search from '../assets/search.svg';
import profile from '../assets/profile.svg';
import smallArrow from '../assets/smallArrow.svg';

export default function Nav(){
  return(
    <div className='nav'>
      <img className='nav-logo' alt='gettit' src={navLogo} />
      <div className='search-container'>
        <img className='search-icon' alt='search icon' src={search} />
        <input placeholder='Search Gettit' />
      </div>
      <button>Log In</button>
      <div className='nav-profile'>
        <img className='profile-picture' alt='profile' src={profile} />
        <img className='profile-arrow' alt='down arrow' src={smallArrow} />
      </div>
      <ul className='nav-drop-down'>
        <li className='nav-drop-item'>Toggle Dark Mode</li>
        <li className='nav-drop-item'>Log In / Sign Up</li>
      </ul>
    </div>
  )
};