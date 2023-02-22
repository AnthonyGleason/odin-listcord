export default class Channel{
  channelName: string;
  messageArray: any[];
  userArray: any[];

  constructor(channelName:string,messageArray: any[],userArray: any[]){
    this.channelName = channelName;
    this.messageArray = messageArray;
    this.userArray = userArray;
  }
}