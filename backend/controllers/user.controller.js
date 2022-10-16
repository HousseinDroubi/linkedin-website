const User = require('../models/user.model');
const { dirname } = require('path');
const image_decoder = require("fs");

const getUser=async(req,res)=>{
    const user= await User.findOne({id:req.id});
    res.json(user);
}
const getSomeUsers=(req,res)=>{
    // TODO: 
    // const user= await User.findOne({id:req.id});
    // res.json(user);
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
    
    image_decoder.writeFile(profile_url, image_base64, 'base64', (err)=> {
        console.log("user added");
    });
}

module.exports = {
    getUser,
    getSomeUsers,
    updateUser
}