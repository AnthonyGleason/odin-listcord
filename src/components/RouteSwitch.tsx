import React from 'react';
import {useState} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SignUp from './SignUp';

//import components
import App from './App';
import User from '../classes/User';

export default function RouteSwitch(){
  //logged in statedetermines conditional rendering of sign in page
  const [loggedIn,setLoggedIn] = useState(false);
  //sets currnet user to be the default user
  const [currentUser,setCurrentUser] = useState(undefined);
  
  if (loggedIn===false) return (<SignUp loggedIn={loggedIn} setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser} />);
  //else return the app  
  else{
    console.log(currentUser, 'current user');
    return(
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App />} />
          </Routes>
        </BrowserRouter>
      </>
    )
  };
}