var express = require("express")
const dashboard = require('../../data/dashboard');
const router = express.Router(); 
router.post('/assign', (req,res,next)=>{
    try{
      const emp = req.body.emp;
      const sys = req.body.sys;
      const os = req.body.os;
      const ms = req.body.ms;
      const rd = req.body.rd;
      const rtd = req.body.rtd;
  
       
        dashboard.create({emp,sys,os,ms,rd,rtd},
        function(err , dashboard){
          if(err) res.status(500).send("There was problem in registering system Details");
      
          res.status(200).json({
            data : dashboard,
            message : "system is assigned to the employee"
          });

        })
    } 
    catch (err){
        next(err)
    }
    
});
module.exports = router;