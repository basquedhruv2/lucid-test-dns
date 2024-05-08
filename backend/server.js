require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

const dbURI = 'mongodb+srv://test123:testing123*@dns-manager-test1.kw1nmpq.mongodb.net/e';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.log(err));

app.use(cors());
app.use(express.json()); 

app.get('/', (req, res) => {
  res.send('Hello from DNS Manager backend!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
