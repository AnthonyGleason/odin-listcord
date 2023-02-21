import React from 'react';
import {useState} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SignUp from './SignUp';

//import components
import App from './App';

export default function RouteSwitch(){
  //logged in statedetermines conditional rendering of sign in page
  const [loggedIn,setLoggedIn] = useState(false);

  if (loggedIn===false) return (<SignUp loggedIn={loggedIn} setLoggedIn={setLoggedIn} />);
  //else return the app  
  else{
    return(
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App />} />
          </Routes>
        </BrowserRouter>
      </>
    )
  };
}