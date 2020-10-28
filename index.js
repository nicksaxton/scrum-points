const express = require('express');
const path = require('path');

const app = express();

const http = require('http').createServer(app);

const io = require('socket.io')(http);

const sessions = {};

io.on('connection', (socket) => {
  console.log(socket.id, 'Client connected');

  socket.on('create session', ({ name, role }, callback) => {
    console.log(socket.id, 'Creating session');

    const sessionCode = Math.random().toString().substr(2, 6);

    socket.join(sessionCode);

    sessions[sessionCode] = {
      participants: {
        [socket.id]: { name, role, vote: null },
      },
      revealed: false,
    };

    callback(sessionCode);
  });

  socket.on('disconnect', () => {
    console.log(socket.id, 'Disconnected');

    // Clean up participants and possibly sessions
    // if no participants remain
    for (sessionCode in sessions) {
      const session = sessions[sessionCode];
      if (session.participants[socket.id]) {
        delete session.participants[socket.id];
        if (Object.keys(session.participants).length === 0) {
          delete sessions[sessionCode];
        }
      }
    }
  });
});

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

const port = process.env.PORT || 5000;

http.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
