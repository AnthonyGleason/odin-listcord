import React from 'react';
import {useState} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

//import components
import App from './App';
export default function RouteSwitch(){
  const [currentUser,setCurrentUser] = useState('');
  return(
    <>
      <button onClick={()=>{console.log(currentUser)}}>pressme</button>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App setCurrentUser={setCurrentUser} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}