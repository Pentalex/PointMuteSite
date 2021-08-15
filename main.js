var timerSocket = new WebSocket("ws://localhost:8080")
timerSocket.onmessage = function (event) {
  console.log(event.data);
}