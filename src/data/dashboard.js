let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var dashboard = new Schema({
    emp: {
        type: Schema.Types.ObjectId,
        ref: "employees"
    },
    sys: {
        type: Schema.Types.ObjectId,
        ref: "system"
    },
    os: {
        type: Schema.Types.ObjectId,
        ref: "os"
    },
    ms: {
        type: Schema.Types.ObjectId,
        ref: "msOffice"
    },
    rd: {
        type: Date,
        required : [ true]
    },
    rtd: {
        type: Date,
        required : [ true]
    }

});

module.exports = mongoose.model('dashboard', dashboard);
