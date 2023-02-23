import React from 'react';

export default function Channel({selectedChannel,setSelectedChannel,channelName}: any){
  if (selectedChannel==channelName) changeBackgroundColor(channelName);
  return(
    <div className="channel-item" id={channelName}>
      <div onClick={()=>{setSelectedChannel(channelName);}} className="channel-name">{channelName}</div>
    </div>
  )
}

let changeBackgroundColor = function (channelName: string){
  let appDiv: any = document.querySelector('.app');
  if (channelName == 'Gaming'){
    appDiv.style.backgroundColor='pink';
  }else if (channelName=='Movies'){
    appDiv.style.backgroundColor='red';
  }else if (channelName==='Television'){
    appDiv.style.backgroundColor='blue';
  }else if (channelName==='General'){
    appDiv.style.backgroundColor='grey';
  }else if (channelName==='Anime'){
    appDiv.style.backgroundColor='purple';
  }else{
    appDiv.style.backgroundColor='brown';
  }
}