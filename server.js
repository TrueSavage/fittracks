const express = require('express');
const mongoose = require('mongoose');
const { join } = require('path');

const app = express();

app.use(express.static(join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/exercise', (req, res) => {
  res.sendFile(join(_dirname, 'public/exercise.html'));

});
app.get('/stats', (req, res) => {
  res.sendFile(join(_dirname, 'public/stats.html'));
});

require('./config')
  .then(() => app.listen(process.env.PORT || 3000))
  .catch(e => console.log(e))

// app.listen(3000)
