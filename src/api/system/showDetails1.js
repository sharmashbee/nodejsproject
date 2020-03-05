var express = require("express")
const system = require('../../data/system');
const verifyToken = require('../../lib/verifyToken');
const router = express.Router();
router.get('/showDetails1',verifyToken, ( req , res , next )=>{
     try{
         
         system.find({},function( err , system ){
             console.log(err)
             if(err) res.status(500).send("There was problem in finding laptop/desktop");
             if(!system) res.status(404).send("No laptop/desktop found")
             res.status(200).json({
                  data : system
             });
         });
    
     }
     catch(err){
         next(err)
     }
});
module.exports=router;