var express = require("express")
const employees = require('../../data/employees');
const router = express.Router();
const verifyToken = require('../../lib/verifyToken');
router.get('/showDetails',verifyToken,( req , res , next )=>{
     try{
         
        
         employees.find({},function( err , employees ){
             if(err) res.status(500).send("There was problem in finding employee");
             if(!employees) res.status(404).send("No employee found")
             res.status(200).json({
                  data : employees
             })
        
         
     })
    }
     catch(err){
         next(err)
     }
});
router.get('/showDetails/:emp',verifyToken, (req, res, next) => {
    const emp = req.params.emp;
    employees.findById({_id:emp},(err, employees) => {
    if (!employees) return next(new Error('employees does not exist'));
      res.status(200).json({
      data: employees
     });
  
  
  });
  
  })
  
module.exports=router;
 