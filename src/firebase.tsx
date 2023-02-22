import {initializeApp} from 'firebase/app';
import {getDocs,getFirestore, collection} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig: object = {
  apiKey: "AIzaSyDKjPAGHAGgTGfvMWl7SlCjglwWEwotAjw",
  authDomain: "listcord-5c5bc.firebaseapp.com",
  projectId: "listcord-5c5bc",
  storageBucket: "listcord-5c5bc.appspot.com",
  messagingSenderId: "587015232125",
  appId: "1:587015232125:web:3e05fb37be29360d5e2f14",
  measurementId: "G-P1VPZ0VPKQ"
};

export function getApp(){
  //initalize the firebase app with the config
  const app = initializeApp(firebaseConfig);
  return app;
}
export default function getdb(){
  //get the current database
  const db:any = getFirestore(getApp());
  return db;
}