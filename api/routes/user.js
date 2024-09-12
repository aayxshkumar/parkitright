const express = require('express');
const router = express.Router();
const {
  register,
  login,
  logout,
  googleLogin,
} = require('../controllers/userController');

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/google/login').post(googleLogin)
router.route('/logout').get(logout);
// router.get("/aryan",async (req,res)=>{
//   console.log('hello');
//   res.status(500).json({
//     message:"helloworld"
//   })
// })
module.exports = router;
