let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var dashboard = new Schema({
    emp: {
        type: Schema.Types.ObjectId,
        ref: "employees",
        unique: true
    },
    sys: {
        type: Schema.Types.ObjectId,
        ref: "system",
        unique: true
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
        type: Date
    },
    Token: {
        type: String
    }

});

module.exports = mongoose.model('dashboard', dashboard);
