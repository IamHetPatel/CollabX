const express = require('express')
const app = express();
const http = require('http')
const {Server} = require('socket.io');

const server = http.createServer(app);
const io = new Server(server);

io.on('connection',(socket)=>{
    console.log(socket)
})

const PORT = process.env.PORT|| 5500;
server.listen(PORT, ()=> console.log(`listening to the port ${PORT}`))