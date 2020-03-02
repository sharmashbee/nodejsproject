const employees = require('../../data/employees');
const express = require("express");
const router = express.Router();
router.post('/add', (req, res) => {
  try{
    const {empid,empname,email,phone,doj,dor} = req.body;
    employees.create({empid,empname,email,phone,doj,dor},
      function (err, employees) {
        console.log(err)
        if (err) return res.status(500).send("There was a problem in adding the employee")
      
        res.status(200).json({
            data: employees,
            message:"employee has been added"
        });
      });
  

  }

  catch(err){
    next(err);

}
   
   
  });
module.exports = router;
