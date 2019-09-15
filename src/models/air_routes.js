const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const { AirlineSchema } = require('./air_airlines');

// Air Alliance Schema based on MongoDB collection
const schema = Schema({
    airline: AirlineSchema,
    src_airport: String,
    dst_airport: String,
    codeshare: String,
    stops: Number,
    airplane: String,
});

const Model = model('air_routes', schema);

module.exports = Model;

