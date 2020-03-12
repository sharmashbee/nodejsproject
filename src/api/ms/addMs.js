var express = require("express")
const msOffice = require('../../data/msOffice');
const router = express.Router(); 
router.post('/addMs', async(req,res,next)=>{
    try{
    const {msname}=req.body;
    const ms = await msOffice.findOne({msname});
    if(ms) res.send({msg:"ms already exist"});
    else{
        await msOffice.create({msname});
        res.status(200).send({ message:"msoffice details added" });

    }
   
    } catch (err){
        next(err)
    }
    
});
module.exports = router;