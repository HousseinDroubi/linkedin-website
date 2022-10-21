const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { dirname } = require('path');
const image_decoder = require("fs");

const login = async(req,res)=>{

    const{email,password}= req.body;
    const user =await User.findOne({email}).lean();
    if(!user) return res.status(404).json({message:"invalid"});
    const isMatch =  bcrypt.compare(password,user.password);
    if(!isMatch) return res.status(404).json({message:"Invalid"});

    const token = jwt.sign({id:user.id,user_type:user.user_type}, process.env.JWT_SECRET_KEY,{
        expiresIn:"1h"
    });
    res.json({token: token});
}

const signup = async(req,res)=>{
    const {username,email,password,description,user_type,image_base64} = req.body;
    const image_unique_name = `${Math.floor(Date.now() / 10)}`;
    const images_path = `${dirname(require.main.filename)}\\public\\assets\\images\\`;
    const profile_url = `${images_path}${image_unique_name}.png`;

    try{
        const user = new User();
        user.username = username;
        user.email = email;
        user.password=await bcrypt.hash(password,10);
        user.description = description; 
        user.profile_url = profile_url;
        user.user_type = user_type;
        await user.save();
        
        image_decoder.writeFileSync(profile_url, image_base64+"", 'base64', (err)=> {
                console.log("user added");
              });

        res.json({message:"user added"});
    }catch(err){
        res.status(200).json({
            message:err.message
        });
    }
}

module.exports = {
    login,
    signup
}