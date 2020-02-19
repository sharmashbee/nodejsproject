const user = require('../../data/user');
const express = require("express");
const router = express.Router(); 
 
router.put('/update/:userId',  function(req, res, next) {
    try{
        const update =req.body;
        const userId = req.params.userId;
    
        
        user.findById({_id: userId},function (err, user) {
            if (err) return res.status(500).send("There was a problem finding the user.");
            
                if (user === null) {
                    res.status(404).send("No user found.");
                }
                else{
                    user.updateOne({$set:update}, (err, data)=>{
                        if(!err){
                            res.status(200).json({
                                data:user,
                                message:"user updated"
                            })
                        }
                    });
                }
        });

    }
    catch(err){
        next(err);
    }
    
});
   module.exports = router;