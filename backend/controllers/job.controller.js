const Job = require('../models/job.model');

const createJob = async(req,res)=>{
    const {title,time,salary,company_id} = req.body;
    try{
        const job = new Job();
        job.title = title;
        job.time = time;
        job.salary=salary;
        job.company_id = company_id;
        await job.save();
        res.json({message:"job added"});
    }catch(err){
        res.status(200).json({
            message:err.message
        });
    }
}
const getAllJobs = async(req,res)=>{
    const jobs= await Job.find().lean();
    res.json(jobs);
}
const getSearchJobs = async(req,res)=>{
    const {title} = req.params;
    const jobs= await Job.find({title}).lean();
    res.json(jobs);
}
const getMyJobs = async(req,res)=>{
    const {company_id} = req.params;
    const jobs= await Job.find({company_id}).lean();
    res.json(jobs);
}
module.exports = {
    createJob,
    getAllJobs,
    getSearchJobs,
    getMyJobs
}