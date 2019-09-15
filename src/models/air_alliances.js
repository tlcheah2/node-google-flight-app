const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// Air Alliance Schema based on MongoDB collection
const schema = Schema({
    name: String,
    airlines: [String]
});

const Model = model('air_alliances', schema);

module.exports = Model;

