let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var system = new Schema({
    emp: {
        type: Schema.Types.ObjectId,
        ref: "employees"
    },
    os: {
        type: Schema.Types.ObjectId,
        ref: "os"
    },
    ms: {
        type: Schema.Types.ObjectId,
        ref: "msOffice"
    },

    sysid: {
        type: String,
        required : true,
        unique: true
    },
    owner: {
        type:String,
        required: true,
        enum: ["rented", "own"]

    },
    systype: {
        type:String,
        required: true,
        enum: ["laptop", "desktop"]

    },
    ram: {
        type: String,
        required : [ true],
  
    },
    hdd: {
        type: String,
        required : [ true],
  
    },
    rd: {
        type: Date,
        required : [ true]
    },
    rtd: {
        type: Date,
        required : [ true]
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('system', system);
