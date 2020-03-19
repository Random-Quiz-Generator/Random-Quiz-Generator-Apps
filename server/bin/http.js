const app = require('../app')
const http = require('http')
const server = http.createServer(app)
const io = require('socket.io')(server)
const fs = require('fs')
const port = 3000

const questions = JSON.parse(fs.readFileSync('questions.json', 'utf-8'))

//nanti dipanggil ke function socket yang get question
function getQuestion () {
  let counter = 0
  if (counter > 10) {
    counter += 1
    const random = Math.floor(Math.random() * Math.floor(questions.length))
    return questions.splice(random, 1)
  } else {
    return null
  }
}

io.on('connection', socket => {
  console.log('user connected')
})

server.listen(port, _ => {
  console.log(`Working on port ${port}`);
})