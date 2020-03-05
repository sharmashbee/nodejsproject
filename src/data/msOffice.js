let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var msOffice = new Schema({
   
    msname: {
        type: String,
        required : true
    },
    Token: {
        type: String
    }

});

module.exports = mongoose.model('msOffice', msOffice);
