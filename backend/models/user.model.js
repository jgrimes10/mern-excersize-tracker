// import dependencies
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// create schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    }
}, {
    timestamps: true
});

// create model
const User = mongoose.model('User', userSchema);

// export model
module.exports = User;
