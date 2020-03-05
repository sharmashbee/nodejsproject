var express = require("express")
const os =require("../../data/os")
const router = express.Router()
const verifyToken = require('../../lib/verifyToken');
router.get('/getOs',verifyToken,(req , res , next)=>{
    try{
      os.find({},function( err , os ){
        if(err) res.status(500).send("There was problem in finding os");
        if(!os) res.status(404).send("No matching os found")
         res.status(200).json({
             data : os
         });
    });
    }
    catch(err){
        next (err)
    }

});
module.exports=router;