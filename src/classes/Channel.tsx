export default class Channel{
  channelName: string;
  messageArray: any[];

  constructor(channelName:string,messageArray: any[]){
    this.channelName = channelName;
    this.messageArray = messageArray;
  }
}