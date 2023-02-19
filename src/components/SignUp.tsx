import React from 'react';
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';

export default function SignUp({loggedIn,setLoggedIn}:any){
   /*
    const auth = getAuth(getApp());
     signInWithEmailAndPassword(auth,'ainfortunio1@gmail.com','testtt').then((login)=>{
     console.log(login);
    });
  */

  //conditional rendering
  if (loggedIn===true){
    return(<></>)
  }else{
    return(
      <div className='fade'>
        <form className='sign-up'>
          <label>Username: </label>
          <input />
          <label>Password: </label>
          <input />
          <div className='sign-in-message'></div>
          <button onClick={()=>{handleSignIn(setLoggedIn)}} type='button'>Sign In!</button>
          <button type='button'>Sign Up!</button>
        </form>
      </div>
    )
  }
}

let handleSignIn = function(setLoggedIn: any):void{
  setLoggedIn(true);
}