export default class User{
  UID:string;
  joinedChannels: any[];
  sentMessages:any[];
  username:string;

  constructor(UID:string,joinedChannels:any[],sentMessages:any[],username:string){
    this.UID= UID;
    this.joinedChannels= joinedChannels;
    this.sentMessages= sentMessages;
    this.username= username;
  }
}