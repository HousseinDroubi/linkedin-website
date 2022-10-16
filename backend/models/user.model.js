const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:'Name is required',
    },
    email:{
        type:String,
        required:'Email is required',
        unique:true
    },
    password:{
        type:String,
        required: 'Password is required',
        selected:false
    },
    description:{
        type:String,
        required: 'Description is required'
    },
    profile_url:{
        type:String,
        required: 'Image is required'
    },

})

const User = mongoose.model('User',userSchema);
module.exports = User;