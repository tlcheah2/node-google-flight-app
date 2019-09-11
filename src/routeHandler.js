/**
 * This is where we add or remove all the route/endpoint to our express application
 */

const router = require('express').Router();
const flightController = require('./controllers/flightController');

// Default Route
router.get('/', (req, res) => res.send('Welcome to Google Flight App!'))

// Search flight route
router.post('/flight', flightController.searchFlight);


module.exports = router;
