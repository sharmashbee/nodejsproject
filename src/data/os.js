let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var os = new Schema({
 
    osname: {
        type: String,
        required : true
    },
    Token: {
        type: String
    }

});

module.exports = mongoose.model('os', os);
