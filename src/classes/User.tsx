export default class User{
  UID: string;
  channelArray: any[];
  dmArray: any[];
  
  constructor(userUID: string,channelArray: any[],dmArray: any[]){
    this.UID=userUID;
    this.channelArray=channelArray;
    this.dmArray=dmArray;
  };
}