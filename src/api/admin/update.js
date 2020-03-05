const admin = require('../../data/admin');
const express = require("express");
const router = express.Router();

router.put('/update/:adminId', async(req, res) => {
    try{
        const update =req.body;
        const adminId = req.params.adminId;
       // console.log(adminId);
        
       // if (!adminId) res.status(500).send({msg:'no id provided'});


            const admin11 = await admin.findById({_id: adminId});
            if (!admin11)  res.status(500).send({msg:'admin not found with this Id'});
            else{
              admin.updateOne({$set:update}, (err, admin)=>{
                if(!err){
                    res.status(200).json({
                        data:admin,
                        message:"user updated"
                    })
                }
            });
        }
        
    }

    catch(err){
        next(err);
    }
});
module.exports = router;