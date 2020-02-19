const user = require('../../data/user');
const express = require("express");
const router = express.Router();
router.delete('/delete1/:userId', (req,res, next) => {
    try{
        const userId = req.params.userId;
        user.findByIdAndDelete({_id:userId}, (err,data) => {
            if (err) throw err;
            res.status(200).json({
        
                data: null,
                message: 'User has been deleted'
               });
    
        });

    }
    catch(err){
        next(err);
    }
 
   

})

    
module.exports = router;