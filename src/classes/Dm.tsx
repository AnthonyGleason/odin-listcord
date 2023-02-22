export default class Dm{
  dmName: string;
  messageArray: string[];
  dmMemberArray: string[];
  dmID: string;

  constructor( dmID: string,dmName: string,messageArray: string[], dmMemberArray: string[]){
    this.dmName = dmName;
    this.messageArray = messageArray;
    this.dmMemberArray = dmMemberArray;
    this.dmID = dmID;
  };
}