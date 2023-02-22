import React from 'react';
import {useState} from 'react';
import {app, database} from '../firebaseConfig';
import {collection, addDoc , getDocs,query,where} from 'firebase/firestore';
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth';
import User from '../classes/User';

const auth = getAuth(app)

export default function SignUp({currentUser,setCurrentUser}:any){
  const [userInput,setUserInput] = useState('');
  const [passInput,setPassInput] = useState('');

  return(
    <div className="app">
      <form>
        <input value={userInput} onChange={(e)=>{setUserInput(e.target.value)}} placeholder='username' />
        <input value={passInput} onChange={(e)=>{setPassInput(e.target.value)}} placeholder='password' />
        <button onClick={()=>{handleSignIn(userInput,passInput,false,setCurrentUser)}} type='button'>Sign In</button>
        <button onClick={()=>{handleSignIn(userInput,passInput,true,setCurrentUser)}} type='button'>Sign Up</button>
        <button onClick={()=>{handleSignIn('demouser@demouser.com','demouser',false,setCurrentUser)}} type='button'>Use Demo User</button>
      </form>
    </div>
  )
}

let handleSignIn = async function(user: string,pass: string,register:boolean,setCurrentUser:any){
  const userRef = collection(database,'users');
  let login: any;
  
  //logins in or creates a new user based on the register boolean passed
  if (register===true){
    //create a new user
    login = await createUserWithEmailAndPassword(auth,user,pass);
    //create a doc in the users collection for this new user
    addDoc(userRef,{
      UID: login.user.uid,
      joinedChannels: [],
      sentMessages: [],
      username: login.user.email,
    });
  }else{
    login = await signInWithEmailAndPassword(auth,user,pass);
  }

  //user is now logged in and userdata will be retrieved from firebase
  const currentUserQuery = query(userRef, where('UID',"==",login.user.uid));
  const currentUserSnapshot = await getDocs(currentUserQuery);
  
  currentUserSnapshot.forEach((doc)=>{
    let UID:string = doc.data().UID;
    let joinedChannels:any = doc.data().joinedChannels;
    let sentMessages:any = doc.data().sentMessages;
    let username: string = doc.data().username;
    setCurrentUser(new User(UID,joinedChannels,sentMessages,username));
  })
};