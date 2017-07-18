const express = require('express');
const path = require('path');
const http = require('http');

// INITIALIZATIONS
const app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/views/index.html'));
});

const port = process.env.PORT || '2222';
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log(`Server is listening to a port, that Erin didn't pick on localhost:${port}`));
