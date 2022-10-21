const Notification = require('../models/notification.model');
const Job = require('../models/job.model');

const getSomeJobs=async(req,res)=>{
    const user_id = req.params.user_id;
    user_jobs_json = await Notification.find({user_id:user_id}).select({ "job_id": 1, "_id": 0}).lean()
    user_jobs_id = [];
    user_jobs_json.forEach(element => {
        user_jobs_id.push(element.job_id);
    });

    const jobs = await Job.find({ _id : { $in : user_jobs_id } } ).lean();
    res.json({"jobs":jobs});
}

module.exports = {
    getSomeJobs
}