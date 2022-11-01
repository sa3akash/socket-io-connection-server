
//////////////// ES6
// socket io connection
import { createServer } from "http";
import { Server } from "socket.io";
const httpServer = createServer();

const io = new Server(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});


  // socket io works
  io.on("connection", (socket) => {
    console.log("Connected to socket...", socket.id);
    // ...

  });


httpServer.listen(process.env.PORT, ()=>{
    console.log(`server listening on ${process.env.PORT}`);
})







//// OLD

const express = require('express');
const app = express();
const server = require('http').createServer(app)

const io = require('socket.io')(server,{
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
})


  // socket io works
  io.on("connection", (socket) => {
    console.log("Connected to socket...", socket.id);
    // ...

  });




server.listen(PORT, ()=> console.log(`Listen on port ${PORT}`));










