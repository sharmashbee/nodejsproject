const user = require('../../data/user');
const express = require("express");
const router = express.Router();
const verifyToken = require('./verifyToken');
router.get('/getDetails',verifyToken, (req, res, next) => {
  try{
    user.find({},(err, user) => {
      res.status(200).json({
        data: user
       });
  
    })

  }
  catch(err){
    next(err);
  }
 
})
router.get('/getDetails/:userId',(req, res, next) => {
  try{
    const userId = req.params.userId;
    user.findById({_id: userId}, (err,user) => {
      if (err) throw err;
      res.status(200).json({
        data: user
      })
    })

  }
  catch(err){
    next(err);
  }
 
})
  module.exports = router;  