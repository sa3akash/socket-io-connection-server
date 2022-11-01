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
