const httpServer = require('http').createServer()

const io = require("socket.io")(httpServer, {
    cors: {
      origin: "http://localhost:8000",
      methods: ["GET", "POST"]
    }
})

let usernames = []


io.on('connection', socket => {

    socket.on('new-user', data => {
        usernames[socket.id] = data;
        socket.broadcast.emit('join-message', data+" has joined!")
    })

    socket.on('send-message', data => {
        socket.broadcast.emit('chat-message', {username: usernames[socket.id], message: data})
    })

    socket.on('disconnect', () => {
        socket.broadcast.emit('user-disconnected', usernames[socket.id])
    })
})

httpServer.listen(3000)