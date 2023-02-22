import React from 'react';
import {useState} from 'react';
import SignUp from './SignUp';
import App from '../components/App';

export default function RouteSwitch(){
  const [currentUser,setCurrentUser] = useState(null);
  if (currentUser===null){
    return(
      <>
        <SignUp setCurrentUser={setCurrentUser} />
      </>
    )
  }else{
    return(
      <>
        <App currentUser={currentUser} setCurrentUser={setCurrentUser}  />
      </>
    )
  }
  
}