const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    user_id:{
        type:String,
        required:true
    },
    job_id:{
        type:String,
        required:true
    }
})

const Notification = mongoose.model('Notification',notificationSchema);
module.exports = Notification;