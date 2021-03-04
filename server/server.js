const http = require('http').createServer();

// Solved my CORS security issue
const io = require('socket.io')(http, {
  cors: { origin: "*" }
});




io.on('connection', (socket) => {
  console.log('connection confirmed');
  const id = socket.handshake.query.id
  socket.join(id)

  // socket connects with the 'send-message' item
  socket.on('send-message', ({ recipients, text }) => {
    recipients.forEach(recipient => {
      // const for the recipient
      const newRecipients = recipients.filter(r => r !== recipient)
      newRecipients.push(id)
      // Socket then emits the messege from sender to the recipient
      socket.broadcast.to(recipient).emit('receive-message', {
        recipients: newRecipients, sender: id, text
      })
    })
  })
})
  
// http requires a .listen to port
http.listen(5000, ()=> console.log('listening on http://localhost:5000'))




