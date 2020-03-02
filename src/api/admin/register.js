var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../../lib/config');
const admin = require('../../data/admin');
const express = require("express");
const router = express.Router(); 


router.post('/register', (req, res) => {
    const {name,phone,email} = req.body
    
    var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  
    admin.create({name, phone, email, password:hashedPassword},
    function (err, admin) {
      if (err) return res.status(500).send("There was a problem registering the user.")
      // create a token
      var Token = jwt.sign({ id: admin._id }, config.secret, {
        expiresIn: 86400 
      });
      res.status(200).send({ auth: true, token: Token });
    });
  });
module.exports = router;
