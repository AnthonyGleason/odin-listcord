export default class User{
  isAdmin: boolean;
  name: string;
  score: number;
  userUID: string;
  posts: any[];

  constructor(isAdmin: boolean, name: string, score: number, userUID: string){
    this.isAdmin = isAdmin;
    this.name = name;
    this.score = score;
    this.userUID = userUID;
    this.posts = this.getPosts();
  }

  createUser(){

  };

  deleteUser(){

  };

  createPost(){

  };
  
  deletePost(){

  };

  getPosts(){
    let posts = [''];
    return posts;
  };
}