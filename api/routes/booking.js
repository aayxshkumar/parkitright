const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middlewares/user');
const {
  createBookings,
  getBookings,
} = require('../controllers/bookingController');

// Protected routes (user must be logged in)
router.route('/').get(isLoggedIn, getBookings).post(isLoggedIn, createBookings);
// console.log("hello world"); 
router.route('/').get(getBookings).post(createBookings);

module.exports = router;
