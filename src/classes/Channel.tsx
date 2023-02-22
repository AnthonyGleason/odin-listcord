export default class Channel{
  channelID: string;
  channelName: string;
  messageArray: any[];
  channelMemberArray: string[];

  constructor(channelID: string,channelName: string, messageArray: any[], channelMemberArray: string[]){
    this.channelID = channelID;
    this.channelName = channelName;
    this.messageArray = messageArray;
    this.channelMemberArray = channelMemberArray;
  };
}