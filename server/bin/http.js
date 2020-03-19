const app = require('../app')
const http = require('http')
const server = http.createServer(app)
const socketio = require('socket.io')(server)
const port = 3000
const players = []

socketio.on('connection', socket => {
  socket.on('joined', (playerName) => {
    socket.player = players.length
    players.push(playerName)
    socketio.emit('updatePlayer', players)

    socket.on('leave', () => {
      socket.disconnect()
    })
  })
  socket.on('disconnect', function () {
    players.splice(socket.player, 1)
    socketio.emit('updatePlayer', players)
  })
})

server.listen(port, _ => {
  console.log(`Working on port ${port}`);
})