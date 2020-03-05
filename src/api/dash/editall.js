var express = require("express")
const dashboard = require('../../data/dashboard');
const router = express.Router();
router.put('/editall/:dashId',async(req, res, next)=>{
    try{
        const dash = req.body;
        const dashId = req.params.dashId;
        const dash11 = await dashboard.findById({_id : dashId});
        if (!dash11) return res.status(500).send("No details found");
        else{
            dashboard.updateOne({$set:dash}, (err,dashboard)=>{
                if(!err){
                    res.status(200).json({
                        data:dashboard,
                        message:"details updated"
                    })
                }
            });
        }
        
      
  
}
catch (err){
   next(err)
}

})
module.exports=router