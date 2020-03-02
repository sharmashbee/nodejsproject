var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../../lib/config');
const admin = require('../../data/admin');
const express = require("express");
//var  roles = require('../../data/roles');
const router = express.Router();
router.post('/login', (req, res) => {
  console.log(req.body);
  const {email} = req.body
    
  admin.findOne({ email: email }, (err, admin) => {
      if (err) return res.status(500).send('Error on the server.');
      if (!admin) return res.status(404).send('No user found.');
   
      var passwordIsValid = bcrypt.compareSync(req.body.password, admin.password);
      if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
  
      //token code
      var Token = jwt.sign({ id: admin._id }, config.secret, {
        expiresIn: 86400 
      });
  
      res.status(200).send({ auth: true, token: Token});
    });

  });
  module.exports = router;