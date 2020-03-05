const dashboard = require('../../data/dashboard');
const express = require("express");
const router = express.Router();
router.delete('/delall/:dashId',  async(req, res)=> {
   try{
       const dashId = req.params.dashId;
   
       const dash11 = await dashboard.findByIdAndDelete({_id : dashId});

       if (!dash11) return res.status(500).send("details not found."); 
       else{
        res.status(200).json({
            data: null,
            message: 'details has been deleted'
           });
        }
      
        
    }
    catch (err){
        next(err)
    }
   
});
   module.exports = router;
   