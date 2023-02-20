import {getDocs, collection} from 'firebase/firestore';

export default class User{
  isAdmin: boolean;
  name: string;
  score: number;
  userUID: string;
  posts: any[];
  loggedIn: boolean;

  constructor(isAdmin: boolean, name: string, score: number, userUID: string,db: any,loggedIn:boolean){
    this.isAdmin = isAdmin;
    this.name = name;
    this.score = score;
    this.userUID = userUID;
    this.posts = this.getPosts(db);
    this.loggedIn = loggedIn;
  }

  createPost(){

  };
  
  deletePost(){

  };

  getPosts(db:any){
    let posts = [''];
    getDocs(collection(db,'users')).then((snapshot)=>{
      snapshot.docs.forEach((doc)=>{
        console.log(doc.data());
      })
    });
    return posts;
  };
}