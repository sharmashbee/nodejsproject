var express = require("express")
const system = require('../../data/system');
const verifyToken = require('../../lib/verifyToken');
const router = express.Router();
router.get('/showDetails1',verifyToken, ( req , res , next )=>{
     try{
         
        //  system.find({},function( err , system ){
        //      console.log(err)
        //      if(err) res.status(500).send("There was problem in finding laptop/desktop");
        //      if(!system) res.status(404).send("No laptop/desktop found")
        //      res.status(200).json({
        //           data : system
        //      });
        //     })
        system.find().exec().then(doc=>{
            var arr = [];
            doc.forEach(item=>{
               var date1 = item.rd;
               var currDate1 = `${date1.getFullYear()}-${("0" + (date1.getMonth() + 1)).slice(-2)}-${("0" + (date1.getDate())).slice(-2)}`
               var date2 = item.rtd;
               var currDate2 = `${date2.getFullYear()}-${("0" + (date2.getMonth() + 1)).slice(-2)}-${("0" + (date2.getDate())).slice(-2)}`
               var obj = {
                   "_id":item._id,
                   "sysid":item.sysid,
                   "owner":item.owner,
                   "systype":item.systype,
                   "ram":item.ram,
                   "hdd":item.hdd,
                   "rd":currDate1,
                   "rtd":currDate2
                  
               }
               arr.push(obj);

            })
            res.send(arr)

        })
      

        }
         
     catch(err){
         next(err)
     }
});
module.exports=router;