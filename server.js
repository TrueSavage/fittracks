const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const Book = mongoose.model('book', new mongoose.Schema({
  text: String,
  isDone: Boolean
}))

app.listen(3000)

const express = require('express');
const { join } = require('path');


const app = express();
app.use(express.static(join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use(require('./routes'))

//Exercise page
app.get('/exercise', (req, res) => {
  res.sendFile(join(__dirname, 'public/exercise.html'));
})

//stats page
app.get('/stats', (req, res) => {
  res.sendFile(join(__dirname, 'public/stats.html'))
})

require('./config')
  .then(() => app.listen(process.env.PORT || 3000))
  .catch(e => console.log(e));