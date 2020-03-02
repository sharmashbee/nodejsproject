var express = require("express")
const system = require('../../data/system');
const router = express.Router(); 
router.post('/add1', (req,res,next)=>{
    try{
    

        const {sysid,owner,systype,ram,hdd,rd,rtd}=req.body;  
        system.create({sysid,owner,systype,ram,hdd,rd,rtd},
        function(err , system){
          console.log(err)
          if(err) res.status(500).send("There was problem in registering system Details");
      
          res.status(200).json({
            data : system,
            message : "system Details added"
          });

        })
    } 
    catch (err){
        next(err)
    }
    
});
module.exports = router;