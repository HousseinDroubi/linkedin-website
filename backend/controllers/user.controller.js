const User = require('../models/user.model');

const getUser=async(req,res)=>{
    const user= await User.findOne({id:req.id});
    res.json(user);
}
const getSomeUsers=(req,res)=>{
    // TODO: 
    // const user= await User.findOne({id:req.id});
    // res.json(user);
}


module.exports = {
    getUser,
    getSomeUsers
}