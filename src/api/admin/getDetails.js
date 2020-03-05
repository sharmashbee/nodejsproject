const admin = require('../../data/admin.js');
const express = require("express");
const verifyToken = require('../../lib/verifyToken');
//var  roles = require('../../data/roles');
const router = express.Router();
router.get('/getDetails',verifyToken, async(req, res, next) => {
  try{
    const admin11 = await admin.find({}) ;
      res.status(200).json({
        data: admin11
       });
  
  
    }

  
  catch(err){
    next(err);
  }


 
})

module.exports = router;    