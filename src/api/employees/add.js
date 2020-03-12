const employees = require('../../data/employees');
const express = require("express");
const router = express.Router();
router.post('/add', async(req, res, next) => {
  try{
    const {empid,empname,email,phone,doj,dor} = req.body;
    const emp = await employees.findOne({ empid});
    const emp1 = await employees.findOne({ email});
    const emp2 = await employees.findOne({ phone});
    if(emp) res.send({msg:'employeeId already exist'});
    else{
      if(emp1) res.send({msg:'email already exist'});
      else{
        if(emp2) res.send({msg:'phone already exist'});
        else{
          await employees.create({empid,empname,email,phone,doj,dor});
          res.status(200).send({msg:"employee has been added" });

        }
      }

    

        

    }
   

  }

  catch(err){
    next(err);

  }
   
   
});
module.exports = router;
