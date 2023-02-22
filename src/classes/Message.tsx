export default class Message{
  channel: any;
  text: string;
  user: any;

  constructor(channel:any, text: string, user: any){
    this.channel = channel;
    this.text = text;
    this.user = user;
  }
}