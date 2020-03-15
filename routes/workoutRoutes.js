const router = required('express').Router()

const { Workout } = require('../models')

router.get('/workouts', (req, res) => {
  Workout.find()
    .then((workouts) => res.json(workouts))
    .catch(e => console.log(e))
})
router.get('/workouts/range', (req, res) => {
  Workout.find(req.body).limit(7)
    .then(workout) => {
    res.json(workout)
  })
  .catch(e => console.log(e))
})
router.post('/workouts', (req, res) => {
  Workout.create(req.body)
    .then(workout) => res.json(workout))
  .catch(e => console.log(e))
})

router.put('/workouts/:id', (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
    .then((workout) => res.json(workout))
    .catch(e => console.log(e))

})

router.put('/workouts/:id', (req, res) => {
  Workout.update({ id: req.params.id }, req.body)
    .then(() => res.sendStatus(200))
    .catch(e => console.log(e))
})

router.delete('/workouts', (req, res) => {
  Workout.findByIdAndRemove(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(e => console.log(e))
})

module.exports = router