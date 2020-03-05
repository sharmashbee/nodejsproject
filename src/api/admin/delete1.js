const admin = require('../../data/admin');
const express = require("express");
const router = express.Router();
router.delete('/delete1/:adminId', async(req,res) => {
    try{
        const adminId = req.params.adminId;
        const admin11 = await admin.findByIdAndDelete({_id:adminId});
        if (!admin11) res.send({msg:'no admin found'});
        else{
            res.status(200).json({
        
                data: null,
                message: 'User has been deleted'
               });
                
    
        }

    }
    catch(err){
        next(err);
    }
   
  

    });
   



    
module.exports = router;