const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({
    job_id:{
        type:String,
        required:'job id is required',
    },
    user_id:{
        type:String,
        required:'user id is required'
    },
    status:{
        type:String,
        required:'status id is required',
        enum: ['waiting','rejected','accepted']
    },

})

const Applicant = mongoose.model('Applicant',applicantSchema);
module.exports = Applicant;