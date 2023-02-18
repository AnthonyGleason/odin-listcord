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

export default function RouteSwitch(){
  /*
  const db=getdb()
  getDocs(collection(db,'users')).then((snapshot)=>{
    snapshot.docs.forEach((doc)=>{
      console.log(doc.data());
    })
  });
  */
  
  /*
  set default user to anonymous user later actually fetch the data and set it to state on first startup so users
  cant modify the data manually.
  */
 
  const [user,setUser] = useState({
    userID: 'tmNrLrMgxBzFVOov6tIv',
    admin: false,
    score: 0,
    name: 'Anonymous User',
  })
  console.log(user);
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