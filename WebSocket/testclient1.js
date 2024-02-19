const WebSocket = require('ws');
const axios = require('axios');

const ws = new WebSocket('ws://localhost:6969');

ws.on('error', console.error);

while (true) {
  
setTimeout(()=> axios.get('http://localhost:90/signallingserver').then((res) => {
  if (res.status==200) {
    console.log(res.data);
    url = res.data.signallingServer;
    ws.send(JSON.stringify({signallingServer: url}));
  }
}).catch((error) => {
  console.log("error block");
  ws.send(JSON.stringify({status: "wait"}));
}),1000)
}



// ws.on('open', function open() {
//   ws.send(JSON.stringify({signallingServer: "ws://localhost:80"}));
//   ws.close();
// });

// ws.on('message', function message(data) {
//   console.log('received: %s', data);
// });