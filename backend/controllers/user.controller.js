const User = require('../models/user.model');
const Applicant = require('../models/applicant.model');
const { dirname } = require('path');
const image_decoder = require("fs");

const getUser=async(req,res)=>{
    const user= await User.findOne({id:req.id});
    res.json(user);
}
const getSomeUsers=async(req,res)=>{
    const job_id = req.params.id;
    const users_applied_json = await Applicant.find({job_id:job_id,status:""}).select({ "user_id": 1, "_id": 0}).lean();

    const users_applied_ids = [];

    users_applied_json.forEach(element => {
        users_applied_ids.push(element.user_id);
    });
    const users_applied = await User.find({ _id : { $in : users_applied_ids } } ).lean();

    res.send(users_applied);
}
const updateUser = async (req,res) =>{
    
    const {id,username,email,description,image_base64}=req.body;
    
    const image_unique_name = `${Math.floor(Date.now() / 10)}`;
    const images_path = `${dirname(require.main.filename)}\\public\\assets\\images\\`;
    const profile_url = `${images_path}${image_unique_name}.png`;
    const data = {username,email,description,profile_url};
    try {
        const user= await User.findByIdAndUpdate(id,data);
        res.send(user);
    } catch (error) {}
    
    image_decoder.writeFileSync(profile_url, image_base64+"", 'base64', (err)=> {
        console.log("user added");
      });
}

module.exports = {
    getUser,
    getSomeUsers,
    updateUser
}