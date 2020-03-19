const app = require('../app')
const http = require('http')
const server = http.createServer(app)
const socketio = require('socket.io')(server)
const port = 3000

socketio.on('connection', socket => {
  console.log('user connected')
})

server.listen(port, _ => {
  console.log(`Working on port ${port}`);
})