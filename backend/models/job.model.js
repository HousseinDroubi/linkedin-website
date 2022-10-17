const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title:{
        type:String,
        required:'Title is required',
    },
    time:{
        type:String,
        required:'Time is required',
        enum: ['full','part']
    },
    salary:{
        type:String,
        required: 'Salary is required'
    },
    company_id:{
        type:String,
        required: 'Company is required'
    },

})

const Job = mongoose.model('Job',jobSchema);
module.exports = Job;