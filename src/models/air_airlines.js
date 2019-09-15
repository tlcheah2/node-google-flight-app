const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// Air Airlines Schema based on MongoDB collection
const airlineSchema = Schema({
    airline: Number,
    name: String,
    alias: String,
    iata: String,
    icao: String,
    active: String,
    country: String,
    base: String
});

const Model = model('air_airlines', airlineSchema);

module.exports = { Model, AirlineSchema: airlineSchema };

