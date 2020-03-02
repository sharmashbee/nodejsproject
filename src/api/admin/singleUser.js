const admin = require('../../data/admin');
const express = require("express");
const verifyToken = require('./verifyToken');
//var  roles = require('../../data/roles');
const router = express.Router();
router.get('/singleUser/:adminId',verifyToken, (req, res, next) => {
  const adminId = req.params.adminId;
  admin.findById({_id:adminId},(err, admin) => {
  if (!admin) return next(new Error('User does not exist'));
    res.status(200).json({
    data: admin
   });


});

})

module.exports = router;
  