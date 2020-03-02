let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var msOffice = new Schema({
   
    msname: {
        type: String,
        required : true
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('msOffice', msOffice);
