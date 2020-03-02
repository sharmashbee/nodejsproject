const admin = require('../../data/admin.js');
const express = require("express");
const verifyToken = require('./verifyToken');
//var  roles = require('../../data/roles');
const router = express.Router();
router.get('/getDetails',verifyToken, (req, res, next) => {


  admin.find({},(err, admin) => {
    if(err) res.status(500).send("There was a problem in finding the admin details");
    res.status(200).json({
      data: admin
     });


  })
})

module.exports = router;    