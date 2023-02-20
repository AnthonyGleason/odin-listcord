import {getDocs, collection} from 'firebase/firestore';

export default class User{
  name: string;
  score: number;
  userUID: string;
  posts: any[];
  loggedIn: boolean;

  constructor(name: string, score: number, userUID: string,loggedIn:boolean){
    this.name = name;
    this.score = score;
    this.userUID = userUID;
    this.posts = [];
    this.loggedIn = loggedIn;
  }

  createPost(){

  };
  
  deletePost(){

  };
}