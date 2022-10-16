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

module.exports = {
    createJob
}