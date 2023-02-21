import React from 'react';
import {useState} from 'react';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import getApp from '../firebase';

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
        <button onClick={()=>{handleSignIn(setLoggedIn,userInput,passInput,setMessage)}} type='button'>Sign In!</button>
        <button onClick={()=>{handleSignUp(userInput,passInput,setMessage)}} type='button'>Sign Up!</button>
        <button onClick={()=>{handleDemoUserSignIn(setLoggedIn,setMessage)}} type='button'>Demo User</button>
      </form>
    </div>
  )
};
//signs in with a default demo user which has a few default friends and channels to get started
let handleDemoUserSignIn = async function(setLoggedIn: any,setMessage: any){
  const auth = getAuth(getApp());
  try{
    await signInWithEmailAndPassword(auth,'demouser@demouser.com','demouser');
    setLoggedIn(true);
  }catch{
    setMessage('An error has occured please try signing in again.');
  }
};
//signs in with a user with an email and password. sets login to true after sucessfull sign in to trigger home page render
let handleSignIn = async function(setLoggedIn:any,userInput: string, passInput: string,setMessage: any){
  const auth = getAuth(getApp());
  try{
    await signInWithEmailAndPassword(auth,userInput,passInput);
  }catch{
    setMessage('Account does not exist or account details are wrong.');
  }
  setLoggedIn(true);
};
//signs up a user with an email and password
let handleSignUp = async function(userInput: string, passInput: string,setMessage: any){
  const auth = getAuth(getApp());
  try{
    await createUserWithEmailAndPassword(auth,userInput,passInput);
  }catch{
    setMessage('An account may already exists with this email.');
  }
  
};
