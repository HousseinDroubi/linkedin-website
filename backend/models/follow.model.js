const mongoose = require('mongoose');

const followSchema = new mongoose.Schema({
    user_id:{
        type:String,
        required:'user id is required',
    },
    company_id:{
        type:String,
        required:'company id is required'
    },

})

const Follow = mongoose.model('Follow',followSchema);
module.exports = Follow;