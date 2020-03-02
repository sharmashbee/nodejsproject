var express = require("express")
const msOffice = require('../../data/msOffice');
const router = express.Router();
router.get('/getMs',( req , res , next )=>{
     try{
         msOffice.find({},function( err , msOffice ){
             if(err) res.status(500).send("There was problem in finding MSOffice");
             if(!msOffice) res.status(404).send(" MSOffice Details NOT found")
              res.status(200).json({
                  data :msOffice
              });
         });
         
     }
     catch(err){
         next(err)
     }
});
module.exports=router;