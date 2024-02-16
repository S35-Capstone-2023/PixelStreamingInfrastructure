const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const port = 6969;
const server = http.createServer(express);
const wss = new WebSocket.Server({ server })

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(json) {
    // wss.clients.forEach(function each(client) {
    //   if (client !== ws && client.readyState === WebSocket.OPEN) {
    //     client.send(data);
    //   }
    // })
    data = JSON.parse(json);
    if (data.signallingServer) {
        console.log(`Signalling server: ${data.signallingServer}`);
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({signallingServer: data.signallingServer}));
            }
            return;
        })
    }
  })
})

server.listen(port, function() {
  console.log(`Server is listening on ${port}!`)
})