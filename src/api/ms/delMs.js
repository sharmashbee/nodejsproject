const msOffice = require('../../data/msOffice');
const express = require("express");
const router = express.Router();
router.delete('/delMs/:MSOfficeId',  function(req, res) {
   try{
  const MSOfficeId = req.params.MSOfficeId;
  msOffice.findByIdAndDelete({_id : MSOfficeId} , (err , msOffice) => {  

    if (err) return res.status(500).send("There was a problem finding the MSOffice."); 

    res.status(200).json({
         data: null,
         message: 'MSOffice has been deleted'
         });
     });
    }
    catch (err){
        next (err)
    }
   
});
   module.exports = router;