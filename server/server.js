const http = require('http').createServer();

const io = require('socket.io')(http, {
  cors: { origin: "*" }
});




io.on('connection', (socket) => {
  console.log('connection confirmed');
  const id = socket.handshake.query.id
  socket.join(id)
  socket.on('send-message', ({ recipients, text }) => {
    recipients.forEach(recipient => {
      const newRecipients = recipients.filter(r => r !== recipient)
      newRecipients.push(id)
      socket.broadcast.to(recipient).emit('receive-message', {
        recipients: newRecipients, sender: id, text
      })
    })
  })
})
  

http.listen(5000, ()=> console.log('listening on http://localhost:5000'))




