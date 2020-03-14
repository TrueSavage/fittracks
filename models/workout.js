const mongoose = require('mongoose');

module.exports = mongoose.model('workout', new mongoose.Schema({
  day: {
    type: Date,
    default: () => new Date()
  },
  exercises: [
    {
      type: {
        type: String
      },
      name: {
        type String
      },
      duration: {
        type: Number
      },
      weight: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      },
      distance: {
        type: Number
      }

    }
  ]
}))