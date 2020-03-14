
module.exports = require('mongoose').connect('mongodb://heroku_dhpmgw0d:m00qt80dpoh51cbdk5ks4b5gl6@ds241658.mlab.com:41658/heroku_dhpmgw0d',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });