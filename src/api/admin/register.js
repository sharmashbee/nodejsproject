var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
const admin = require('../../data/admin');
const express = require("express");
const router = express.Router(); 
const SECRET = process.env.SECRET;


router.post('/register', async(req, res) => {
  try{
    const {name,phone,email} = req.body;
    
    var hashedPassword = await bcrypt.hash(req.body.password, 8);
    const admin11 = await admin.findOne({ email,phone });
    if (admin11) res.send({msg:"admin already exist "})
    else{
      const admin12 = await admin.create({name, phone, email, password:hashedPassword});

      var Token = jwt.sign({ id: admin12._id }, SECRET, {
        expiresIn: 86400 
      });
      res.status(200).send({  token: Token, message:"admin registered successfully" });

    }

  }
  catch(error){
    next(error);
  
  };
  
    
     
   
  });

module.exports = router;

    
  
    

   
    
      
    