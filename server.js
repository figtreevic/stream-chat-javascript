const express = require('express');
const app = express();

// Stream Chat server SDK
const StreamChat = require('stream-chat').StreamChat;
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile('/index.html');
});

app.listen(8800, () => {
  console.log('Example app listening on port 8800!');
});


const serverClient = new StreamChat('qjqgag6uqwrw', '<g6yph3h9tjj8hey8b5m9uvaud7pz39s766rywbm4cswrkuunmu8kth6hf2r2pgqr');

app.get('/token', (req, res) => {
  const { username } = req.query;
  if (username) {
    const token = serverClient.createToken(username);
    res.status(200).json({ token, status: 'sucess' });
  } else {
    res.status(401).json({ message: 'invalid request', status: 'error' });
  }
});