// import dependencies
const router = require('express').Router();
let Exercise = require('../models/exercise.model');

// set up HTTP methods
// GET all exercises
router.route('/').get((req, res) => {
    Exercise.find()
        .then(exercises => res.status(200).json(exercises))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

// POST new exercise
router.route('/').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    // create the new exercise from the body of the request
    const newExercise = new Exercise({
        username,
        description,
        duration,
        date
    });

    // save the new document
    newExercise.save((err, newObj) => {
        if (err)
            return res.status(400).json(`Error: ${err}`);

        return res.status(201).json(newObj);
    });
});

// GET exercise by id
router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => res.status(200).json(exercise))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

// DELETE exercise by id
router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.status(204))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

// PUT exercise by id
router.route('/:id').put((req, res) => {
    Exercise.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, newObj) => {
        if (err)
            return res.status(400).json(`Error: ${err}`);

        return res.status(200).json(newObj);
    });
});

// export router
module.exports = router;