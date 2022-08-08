const express = require('express');
const app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server);
//const http = require('http');
const cors = require('cors');
const port = process.env.PORT||3000;


app.use(cors());
//let server = http.createServer();
//let io = socketIO(server);

server.listen(port, () => {
    console.log('Socket.io server is listening on port 3000');
});

io.on('connection', (socket) => {
    console.log('A user connected');
    socket.emit('testEvent', 'here is some data');
});
