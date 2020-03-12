var express = require("express")
const dashboard = require('../../data/dashboard');
const verifyToken = require('../../lib/verifyToken')
const router = express.Router(); 
router.get('/showall',verifyToken,( req , res , next )=>{
    try{
       
    
        dashboard.find().populate('sys').populate('emp').populate('os').populate('ms').exec().then(doc=>{
           console.log(doc)
            var arr = [];
            doc.forEach(item => {
                var date1 = item.rd;
                var currDate1 = `${date1.getFullYear()}-${("0" + (date1.getMonth() + 1)).slice(-2)}-${("0" + (date1.getDate())).slice(-2)}`
                var date2 = item.rtd;
                var currDate2 = `${date2.getFullYear()}-${("0" + (date2.getMonth() + 1)).slice(-2)}-${("0" + (date2.getDate())).slice(-2)}`
               

                var obj = {
                    "_id":item._id,
                    "emp":item.emp._id,
                    "empid":item.emp.empid,
                    "empname":item.emp.empname,
                    "sys":item.sys._id,
                    "sysid":item.sys.sysid,
                    "os":item.os._id,
                    "osname":item.os.osname,
                    "ms":item.ms._id,          
                    "msname":item.ms.msname,
                    "rd":currDate1,
                    "rtd":currDate2
                   
                }
                arr.push(obj);
            }) 
            res.json(arr);
            
        })
    
    }
    catch(err) {
        next(err);
    
    }

});
module.exports = router;