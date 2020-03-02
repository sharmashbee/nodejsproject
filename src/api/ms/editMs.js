var express = require("express")
const msOffice = require('../../data/msOffice');
const router = express.Router();
router.put('/editMs/:MSOfficeId',(req, res, next)=>{
    try{
    const edit = req.body;
    const MSOfficeId = req.params.MSOfficeId;
    msOffice.findById({_id : MSOfficeId},function (err, MSOffice) {
        if (err) return res.status(500).send("There was a problem finding the MSOffice.");
        if (msOffice === null) {
            res.status(404).send("No MSOffice details found.");
        }else{
            msOffice.updateOne({$set:edit}, (err,msOffice)=>{
                if(!err){
                    res.status(200).json({
                        data:msOffice,
                        message:"MSOffice updated"
                    })
                }
            });
        }
        
      
  });
}
catch (err){
   next(err)
}

})
module.exports=router;