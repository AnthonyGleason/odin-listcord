import React from 'react';
import {useState} from 'react';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';

export default function SignUp({loggedIn,setLoggedIn}:any){
  //set input states
  const [userInput, setUserInput] = useState('');
  const [passInput, setPassInput] = useState('');
  //messages show near the sign in button when there are errors with sign in
  const [message, setMessage] = useState('');

  return(
    <div className='sign-up-container'>
      <form className='sign-up'>
        <label>Email: </label>
        <input type='email' value={userInput} onChange={(e)=>{setUserInput(e.target.value)}} />
        <label>Password: </label>
        <input type='password' value={passInput} onChange={(e)=>{setPassInput(e.target.value)}} />
        <div className='sign-in-message'>{message}</div>
        <button onClick={()=>{handleSignIn(setLoggedIn)}} type='button'>Sign In!</button>
        <button onClick={()=>{handleSignUp()}} type='button'>Sign Up!</button>
        <button onClick={()=>{handleDemoUserSignIn()}} type='button'>Demo User</button>
      </form>
    </div>
  )
};
//signs in with a default demo user which has a few default friends and channels to get started
let handleDemoUserSignIn = function(){
  
};
//signs in with a user with an email and password. sets login to true after sucessfull sign in to trigger home page render
let handleSignIn = function(setLoggedIn:any){
  setLoggedIn(true);
};
//signs up a user with an email and password
let handleSignUp = function(){

};
