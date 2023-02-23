import React from 'react';
import {useState} from 'react';
import {app, database} from '../firebaseConfig';
import {collection, addDoc , getDocs,query,where} from 'firebase/firestore';
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth';
import User from '../classes/User';

const auth = getAuth(app)

export default function SignUp({currentUser,setCurrentUser}:any){
  const [emailInput,setEmailInput] = useState('');
  const [passInput,setPassInput] = useState('');

  return(
    <div className="app">
      <form>
        <input value={emailInput} onChange={(e)=>{setEmailInput(e.target.value)}} placeholder='email' />
        <input value={passInput} onChange={(e)=>{setPassInput(e.target.value)}} placeholder='password' />
        <button onClick={()=>{handleSignIn(emailInput,passInput,false,setCurrentUser)}} type='button'>Sign In</button>
        <button onClick={()=>{handleSignIn(emailInput,passInput,true,setCurrentUser)}} type='button'>Sign Up</button>
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
    //additionally places the user in the five default channels
    addDoc(userRef,{
      UID: login.user.uid,
      joinedChannels: [
        'wOq682g5srPDK84kRZd4',
        '4TS38wkc58XPYdL5WsGK',
        'zYBY0LtMC4FKNytr1zUv',
        'rsW9udjAB1Co9O4FKOtG',
        'e5oIsMpFL9gwcQ0MZosb',
        '8wEKS2Cf70S3ERPmmWqo',
      ],
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