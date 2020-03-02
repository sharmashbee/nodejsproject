const admin = require('../../data/admin');
const express = require("express");
const router = express.Router();

router.put('/update/:adminId',  (req, res) => {
    const update =req.body
    const adminId = req.params.adminId;

    
    admin.findById({_id: adminId}, (err, admin) => {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (admin === null) {
            res.status(404).send("No user found.");
        }else{
            admin.updateOne({$set:update}, (err, admin)=>{
                if(!err){
                    res.status(200).json({
                        data:admin,
                        message:"user updated"
                    })
                }
            });
        }
        
      
  });
});
   module.exports = router;