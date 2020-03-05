let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var system = new Schema({

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
    },
    Token: {
        type: String
    }
});

module.exports = mongoose.model('system', system);
