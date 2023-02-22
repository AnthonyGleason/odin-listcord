export default class Message{
  userUID: string;
  timestamp: Date;
  messageContent: string;
  constructor(userUID:string, messageContent:string){
    this.timestamp=new Date();
    this.userUID=userUID;
    this.messageContent=messageContent;
  }
}