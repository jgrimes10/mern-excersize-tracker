// import dependencies
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// create schema
const exerciseSchema = new Schema({
    username: {type: String, required: true},
    description: {type: String, required: true},
    duration: {type: Number, required: true},
    date: {type: Date, required: true}
}, {
    timestamps: true
});

// create model
const Exercise = mongoose.model('Exercise', exerciseSchema);

// export model
module.exports = Exercise;
