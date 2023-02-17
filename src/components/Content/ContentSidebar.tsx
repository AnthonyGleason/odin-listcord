import React from "react";

export default function ContentSidebar(){
  return(
    <div className='content-sidebar'>
      <ul className="community">
        <li className="community-item">Gaming</li>
        <li className="community-item">Sports</li>
        <li className="community-item">Television</li>
        <li className="community-item">Celebrity</li>
      </ul>
      <div className="copyright-info">
        <a href="https://www.anthonyinfortun.io">Made by Anthony Infortunio</a>
        <a href="mailto:contact@anthonyinfortun.io">contact@anthonyinfortun.io</a>
      </div>
      <button>Back To Top</button>
    </div>
  )
};