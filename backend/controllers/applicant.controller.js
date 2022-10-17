const Applicant = require('../models/applicant.model');

const getApplicantStatus = async(req,res)=>{
    const {job_id,user_id} = req.params;
    const applicant= await Applicant.findOne({job_id:job_id,user_id:user_id}).lean();
    
    if(applicant){
        res.json({message:"exist",applicant});
    }else{
        res.json({message:"not exist"});
    }
}
const apply = async(req,res)=>{
    try{
        const {job_id,user_id,status} = req.body;
        const applicant= await Applicant.findOne({job_id:job_id,user_id:user_id});
        if(applicant){
            res.json({message:"already applied!"})
        }else{
        const applicant = new Applicant();
        applicant.job_id = job_id;
        applicant.user_id = user_id;
        applicant.status=status;
        await applicant.save();
        res.json({message:"applicant done!"});}
    }catch(err){
        res.status(200).json({
            message:err.message
        });
    }
}
const reject = async(req,res)=>{
    const {id,...status}=req.body;
    try {
        const applicant= await Applicant.findByIdAndUpdate(id,status);
        res.send(applicant);
    } catch (error) {}
    
}
const accept = async(req,res)=>{
    const {id,...status}=req.body;
    try {
        const applicant= await Applicant.findByIdAndUpdate(id,status);
        res.send(applicant);
    } catch (error) {}
}

module.exports = {
    getApplicantStatus,
    apply,
    reject,
    accept
}