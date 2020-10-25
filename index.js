const express = require('express');
const path = require('path');

const app = express();

const http = require('http').createServer(app);

const io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

const port = process.env.PORT || 5000;

http.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
