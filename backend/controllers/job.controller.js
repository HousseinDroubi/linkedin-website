const Job = require('../models/job.model');
const Follow = require('../models/follow.model');
const Notification = require('../models/notification.model');

const createJob = async(req,res)=>{
    const {title,time,salary,company_id} = req.body;
    try{
        const job = new Job();
        job.title = title;
        job.time = time;
        job.salary=salary;
        job.company_id = company_id;
        await job.save();
        
        users_json = await Follow.find({company_id:company_id}).select({ "user_id": 1, "_id": 0}).lean();
        users_ids =[];
       
        users_json.forEach(element => {
            users_ids.push(element.user_id);
        });

        for (let i = 0;i<users_ids.length;i++){
            const notification = new Notification();
            notification.job_id = job.id;
            notification.user_id = users_ids[i];
            
            await notification.save();
        }
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

const getJob = async(req,res)=>{
    const job= await Job.findOne({id:req.params}).lean();
    res.json(job);
}

module.exports = {
    createJob,
    getAllJobs,
    getSearchJobs,
    getMyJobs,
    getJob
}