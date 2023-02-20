import React from 'react';
import {useState} from 'react';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';

export default function SignUp({loggedIn,setLoggedIn,auth}:any){
  const [userInput, setUserInput] = useState('');
  const [passInput, setPassInput] = useState('');
  const [message, setMessage] = useState('');
  //conditional rendering
  if (loggedIn===true){
    return(<></>)
  }else{
    return(
      <div className='fade'>
        <form className='sign-up'>
          <label>Email: </label>
          <input type='email' value={userInput} onChange={(e)=>{setUserInput(e.target.value)}} />
          <label>Password: </label>
          <input type='password' value={passInput} onChange={(e)=>{setPassInput(e.target.value)}} />
          <div className='sign-in-message'>{message}</div>
          <button onClick={()=>{handleSignIn(setLoggedIn,auth,userInput,passInput,setMessage)}} type='button'>Sign In!</button>
          <button onClick={()=>{handleSignUp(setLoggedIn,auth,userInput,passInput,setMessage)}} type='button'>Sign Up!</button>
        </form>
      </div>
    )
  }
}

let handleSignUp = async function (setLoggedIn:any,auth: any, username:string,password:string,setMessage:any){
  try{
    let login = await createUserWithEmailAndPassword(auth,username,password);
    console.log(login,' has registered!');
    setMessage('You have sucessfully registered and may now sign in!');
  }catch(e){
    setMessage('Account already exists with that email or you have not entered a valid email!');
  }
}

let handleSignIn = async function(setLoggedIn:any,auth: any, username:string,password:string,setMessage:any){
  try{
    let login = await signInWithEmailAndPassword(auth,username,password);
    console.log(login,' has signed in!');
    setLoggedIn(true);
  }catch(e){
    setMessage('Credentials are incorrect or account does not exist');
  }
}

/*
notes:
-after sucessfull sign in the state should be updated to store current user.
*/