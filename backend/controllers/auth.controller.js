const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { dirname } = require('path');
const image_decoder = require("fs");
const login = async(req,res)=>{

}

const signup = async(req,res)=>{
    const {username,email,password,description,image_base64} = req.body;
    const image_unique_name = `${Math.floor(Date.now() / 10)}`;
    const images_path = `${dirname(require.main.filename)}\\public\\assets\\images\\`;
    const profile_url = `${images_path}${image_unique_name}.png`;



    try{
        const user = new User();
        user.username = username;
        user.email = email;
        user.password = password;
        user.password=await bcrypt.hash(password,10);
        user.description = description; 
        user.profile_url = profile_url;

        await user.save();
        image_decoder.writeFile(profile_url, image_base64, 'base64', function(err) {
            //     console.log(err);
              });

        res.json({message:"user added"});
    }catch(err){
        res.status(400).json({
            message:err.message
        });
    }
}

module.exports = {
    login,
    signup
}