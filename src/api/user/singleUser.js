const user = require('../../data/user');
const express = require("express");
const verifyToken = require('./verifyToken');
const router = express.Router();
router.get('/singleUser',verifyToken, (req, res, next) => {
    try{
        user.findOne({_id: req.userId},(err, user) => {
            if (err) throw err;
            // if(err) res.status(500).send("there was problem finding the user");
            // if(!user) res.status(404).send("No user found");
            
            res.status(200).send(user);
        })

    }
    catch(err){
        next(err);
    }
  

})

module.exports = router;
  