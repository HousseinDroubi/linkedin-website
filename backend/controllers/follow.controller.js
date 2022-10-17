const Follow = require('../models/follow.model');

const follow = async(req,res)=>{
    try{
        const {user_id,company_id} = req.body;
        const follow_status= await Follow.findOne({user_id:user_id,company_id:company_id});
        if(follow_status){
            res.json({message:"already following!"})
        }else{
        const follow = new Follow();
        follow.user_id = user_id;
        follow.company_id = company_id;
        await follow.save();
        res.json({message:"follow added"});}
    }catch(err){
        res.status(200).json({
            message:err.message
        });
    }
}

const unfollow = async(req,res)=>{
    try{
        const {user_id,company_id} = req.body;
        const follow_status= await Follow.findOne({user_id:user_id,company_id:company_id});
        if(!follow_status){
            res.send("not followed")
        }else{
        Follow.findOneAndDelete({user_id:user_id,company_id:company_id})
        .then((user)=>res.send(user))
        .catch((err)=>{res.status(200).send(err)});
    }
    }catch(err){
        res.status(200).json({
            message:err.message
        });
    }
}

const getFollowingStatus= async(req,res)=>{
    const {user_id,company_id} = req.params;
    const follow= await Follow.findOne({user_id:user_id,company_id:company_id}).lean();
    if(follow){
        res.json({message:"exist"})
    }else{
        res.json({message:"not exist"})
    }
}

module.exports = {
    follow,
    unfollow,
    getFollowingStatus
}