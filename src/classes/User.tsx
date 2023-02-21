export default class User{
  UID: string;
  constructor(userUID: string){
    this.UID=userUID;
    this.getUserInfo(userUID);
  };
  getUserInfo(userUID: string){
    this.getUserChannels(userUID);
    this.getUserDMS(userUID);
  }
  getUserChannels(userUID: string){

  }
  getUserDMS(userUID: string){

  }
}