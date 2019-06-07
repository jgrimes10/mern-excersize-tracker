// import dependencies
const router = require('express').Router();
let User = require('../models/user.model');

// set up HTTP methods
// GET all users
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.status(200).json(users))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

// POST new user
router.route('/').post((req, res) => {
    const username = req.body.username;

    // create the new user from the body of the request
    const newUser = new User({username});

    // save the new document
    newUser.save((err, newObj) => {
        if (err)
            return res.status(400).json(`Error: ${err}`);

        return res.status(201).json(newObj);
    });
});

// GET user by id
router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(user => res.status(200).json(user))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

// export router
module.exports = router;