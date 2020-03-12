var express = require("express")
const os = require('../../data/os');
const router = express.Router(); 
router.post('/addOs', async(req,res,next)=>{
    try{
        const {osname}=req.body;
        const os1 = await os.findOne({osname});
        if(os1) res.send({msg:"os already exist"});
        else{
          await os.create({osname});
          res.status(200).send({ message:"os details added" });
             
    
          

        }
       
        } catch (err){
        next(err)
        }
    
});
module.exports = router;