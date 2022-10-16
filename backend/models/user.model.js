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
        select:false
    },
    description:{
        type:String,
        required: 'Description is required'
    },
    profile_url:{
        type:String,
        required: 'Image is required'
    },
    user_type:{
        type:String,
        required:true,
        enum: ['0','1']
    },

})

const User = mongoose.model('User',userSchema);
module.exports = User;