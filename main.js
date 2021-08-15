var timerSocket = new WebSocket("ws://localhost:8080")
const muteImg = document.getElementById('muteImg')

timerSocket.onmessage = function (event) {
  console.log(event.data);
  if(event.data.startsWith('settime')){
  	muteImg.style.opacity = "1"
  } else if(event.data.startsWith('unmute')){
  	muteImg.style.opacity = "0"
  }
}