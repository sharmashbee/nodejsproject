let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var employees = new Schema({
    empid: {
        type: String,
        required : true,
        unique: true
    },
    empname: {
        type: String,
        required : true
    },
    email: {
        type: String,
        required : true,
        unique: true
    },
    phone: {
      type: String,
      required : true,
      unique: true

    },
    doj: {
        type: String,
        required : true
    },
    dor: {
        type: String,
        required: true
    },
    Token: {
        type: String
    }
});

module.exports = mongoose.model('employees', employees);
