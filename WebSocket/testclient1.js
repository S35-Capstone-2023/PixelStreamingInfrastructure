const WebSocket = require('ws');
const axios = require('axios');

const ws = new WebSocket('ws://localhost:6969');

ws.on('error', console.error);

axios.get('http://localhost:90/signallingserver').then((res) => {
  if (res.status==200) {
    console.log(res.data);
    ws.send(JSON.stringify({signallingServer: "ws://localhost:80"}));
  }
}).catch((error) => {
  console.log("error block");
  ws.send(JSON.stringify({status: 'wait'}));
}).finally(() => {
  ws.close();
});

// ws.on('open', function open() {
//   ws.send(JSON.stringify({signallingServer: "ws://localhost:80"}));
//   ws.close();
// });

// ws.on('message', function message(data) {
//   console.log('received: %s', data);
// });