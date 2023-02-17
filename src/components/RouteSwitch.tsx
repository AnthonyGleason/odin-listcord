import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore/lite';

//import components
import Nav from './Nav';
import Content from './Content';
import Sidebar from './Sidebar';

export default function RouteSwitch(){
  return(
    <div className='content'>
      <Nav />
      <Sidebar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Content />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
};