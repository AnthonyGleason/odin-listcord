import React from 'react';
import {useState} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {getDocs, collection} from 'firebase/firestore';

//import components
import Nav from './Nav';
import Content from './Content';
import Sidebar from './Sidebar';

//get firebase database
import getdb from './Content/firebase';

//import styling
import '../styles/routeSwitch.css';

export default function RouteSwitch(){

  /*
  const db=getdb()
  getDocs(collection(db,'users')).then((snapshot)=>{
    snapshot.docs.forEach((doc)=>{
      console.log(doc.data());
    })
  });
  */

  const [user,setUser] = useState({
    userID: 'tmNrLrMgxBzFVOov6tIv',
    admin: false,
    score: 0,
    name: 'Anonymous User',
  })

  return(
    <>
      <Nav />
      <Sidebar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Content />} />
        </Routes>
      </BrowserRouter>
    </>
  )
};

/*
  Outline / Notes

  -pressing on feed on the sidebar should collapse the dropdown
  
  -if there is no image or image isn't grabbed display a placeholder image
  
  -if the user is not an anonymous user hide the join gettit and log in button

  -set default user to anonymous user later actually fetch the data and set it to state on first startup so users
  cant modify the data manually.

  -conditional rendering on the content section of the site with arguments popular or community
  
  -when pressing on a post the post will take up the whole bottom of the screen with replies nav will be visible on top
*/