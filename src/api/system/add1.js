var express = require("express")
const system = require('../../data/system');
const router = express.Router(); 
router.post('/add1', async(req,res,next)=>{
    try{
    

        const {sysid,owner,systype,ram,hdd,rd,rtd}=req.body;  
        const sys1 = await system.findOne({sysid});
        if(sys1) res.send({msg:"system id already exists"}); 
        else{
            system.create({sysid,owner,systype,ram,hdd,rd,rtd});
            res.status(200).send({  msg:"system has been added" });
         }
        
    } 
    catch (err){
        next(err)
    }
    
});
module.exports = router;
