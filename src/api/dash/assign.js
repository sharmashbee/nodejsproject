var express = require("express")
const dashboard = require('../../data/dashboard');
const router = express.Router(); 
router.post('/assign', async(req,res,next)=>{
    try{
      const emp = req.body.emp;
      const sys = req.body.sys;
      const os = req.body.os;
      const ms = req.body.ms;
      const rd = req.body.rd;
      const rtd = req.body.rtd;
      const dash11 = await dashboard.findOne({ emp });
      const dash12 = await dashboard.findOne({ sys });
      if(dash11) res.send({msg:" employeeId already exists"});
      else{
        if(dash12) res.send({msg:"systemId already exists"});
        else{
          await dashboard.create({emp,sys,os,ms,rd,rtd});
          res.status(200).send({msg:"system is assigned to the employee" });
 
 
       }
      }
     
    } 
    catch (err){
        next(err)
    }
    
});
module.exports = router;
       
         
          

        
   