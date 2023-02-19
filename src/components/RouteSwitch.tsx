import React from 'react';
import {useState} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import getApp from '../firebase';

//import components
import Nav from './Nav';
import Content from './Content';
import Sidebar from './Sidebar';
import SignUp from './SignUp';

//import styling
import '../styles/routeSwitch.css';

export default function RouteSwitch(){
  const [loggedIn,setLoggedIn] = useState(false);
  /*
    const auth = getAuth(getApp());
     signInWithEmailAndPassword(auth,'ainfortunio1@gmail.com','testtt').then((login)=>{
     console.log(login);
    });
  */
  return(
    <>
      <SignUp loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
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