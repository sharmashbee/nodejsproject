var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
const express = require("express");
const router = express.Router();
const admin = require('../../data/admin');
const SECRET = process.env.SECRET;
router.post('/login',async (req, res, next) => {
  try {
   const { email,password } = req.body;
   const admin11 = await admin.findOne({ email });
   
   if (!admin11) res.send({msg:'No admin found.'});
   else{
    const validPassword = await bcrypt.compare(password, admin11.password);
    if (!validPassword) res.send({msg:'Password is not correct'})
    else{
     const Token = jwt.sign({ id: admin11._id }, SECRET, {
       expiresIn: "1d"
      });
      res.status(200).send({ msg:'admin logged in successfully', token: Token});
 
    }

   }
  }catch (error){
    next(error);
   }
  });
  module.exports = router;