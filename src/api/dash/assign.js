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
      const dash11 = await dashboard.findOne({ emp,sys });
      if(dash11) res.send({msg:'system is already assigned to an employee'});
      else{
         await dashboard.create({emp,sys,os,ms,rd,rtd});
         res.status(200).send({message:"system is assigned to the employee" });


      }
    } 
    catch (err){
        next(err)
    }
    
});
module.exports = router;
       
         
          

        
   