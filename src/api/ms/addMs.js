var express = require("express")
const msOffice = require('../../data/msOffice');
const router = express.Router(); 
router.post('/addMs', (req,res,next)=>{
    try{
    const {msname}=req.body;
    msOffice.create({msname},
    function(err , msOffice){
     if(err) res.status(500).send("There was problem in registering msoffice");
   
  
      res.status(200).send({ message:"msoffice details added" });
      

    })
    } catch (err){
        next(err)
    }
    
});
module.exports = router;