import {initializeApp} from 'firebase/app';
import {getDocs,getFirestore, collection} from 'firebase/firestore';

export default function getDB(){
  const firebaseConfig: object = {
    apiKey: "AIzaSyBy9DKnCcZhRYTaCxYbUpyd7bZEKMuTvdE",
    authDomain: "react-gettit.firebaseapp.com",
    projectId: "react-gettit",
    storageBucket: "react-gettit.appspot.com",
    messagingSenderId: "712867042463",
    appId: "1:712867042463:web:08af8c163da0bce6867eaa",
    measurementId: "G-44416XWN4M"
  };
  //initalize the firebase app with the config
  const app = initializeApp(firebaseConfig);
  //get the current database
  const db = getFirestore(app);
  return db;
}