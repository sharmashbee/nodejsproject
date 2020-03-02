const admin = require('../../data/admin');
const express = require("express");
const router = express.Router();
router.delete('/delete1/:adminId', (req,res) => {
    const adminId = req.params.adminId;
    admin.findByIdAndDelete({_id:adminId}, (err,data) => {
        if (err) throw err;
        res.status(200).json({
    
            data: null,
            message: 'User has been deleted'
           });

    });
   

})

    
module.exports = router;