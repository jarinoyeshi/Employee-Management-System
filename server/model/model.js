

const mongoose = require('mongoose');

var schema = new mongoose.Schema({
   userid: {
        type : String,
        unique: true,
        required: true
        
    }, 
    firstname : {
        type : String,
        required: true
    },
    lastname : {
        type : String,
        required: true
    },
    phoneNumber : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true
        
    }
   
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;