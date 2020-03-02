const express = require("express");
const bodyParser= require("body-parser");
const app = express();
const router = express.Router();
const mongooose = require('./src/data/mongo.js');
const logger  = require('./src/lib/logger.js');
const register = require('./src/api/admin/register.js');
const login = require('./src/api/admin/login.js');
const update = require('./src/api/admin/update.js');
const delete1 = require('./src/api/admin/delete1.js');
const getDetails = require('./src/api/admin/getDetails.js');
const add = require('./src/api/employees/add.js');
const showDetails = require('./src/api/employees/showDetails.js');
const edit = require('./src/api/employees/edit.js');
const empdel = require('./src/api/employees/empdel.js');
const add1 = require('./src/api/system/add1.js');
const showDetails1 = require('./src/api/system/showDetails1.js');
const edit1 = require('./src/api/system/edit1.js');
const sysdel = require('./src/api/system/sysdel.js');
const addOs = require('./src/api/os/addOs.js');
const editOs = require('./src/api/os/editOs.js');
const getOs = require('./src/api/os/getOs.js');
const delOs = require('./src/api/os/delOs.js');
const addMs = require('./src/api/ms/addMs.js');
const editMs = require('./src/api/ms/editMs.js');
const getMs = require('./src/api/ms/getMs.js');
const delMs = require('./src/api/ms/delMs.js');
const assign = require('./src/api/dash/assign.js');
const showall = require('./src/api/dash/showall.js');
const editall = require('./src/api/dash/editall.js');
const delall = require('./src/api/dash/delall.js');
const PORT = process.env.PORT ;
const cors = require('cors');
app.use(cors({ origin: '*', optionsSuccessStatus: 200 }));
mongooose.connection;
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static(__dirname +'/public'));
//api's
router.use('/api/admin', register);
router.use('/api/admin', login);
router.use('/api/admin', getDetails);
router.use('/api/admin', update);
router.use('/api/admin',delete1);
router.use('/api/employees',add);
router.use('/api/employees',showDetails);
router.use('/api/employees',edit);
router.use('/api/employees',empdel);
router.use('/api/system',add1);
router.use('/api/system',showDetails1);
router.use('/api/system',edit1);
router.use('/api/system',sysdel);
router.use('/api/os',addOs);
router.use('/api/os',editOs);
router.use('/api/os',getOs);
router.use('/api/os',delOs);
router.use('/api/ms',addMs);
router.use('/api/ms',editMs);
router.use('/api/ms',getMs);
router.use('/api/ms',delMs);
router.use('/api/dash',assign);
router.use('/api/dash',showall);
router.use('/api/dash',editall);
router.use('/api/dash',delall);

app.listen(PORT, () => {logger.info(`server listening at port : ${PORT}`);
});
app.use(router);

 
 


