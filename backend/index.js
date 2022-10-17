const express = require('express');
require('dotenv').config();
require('./config/db.config');

const app = express();
app.use(express.json());

const authRoutes = require('./routes/auth.route');
app.use('/auth',authRoutes);

const userRoutes = require('./routes/user.route');
app.use('/user',userRoutes);

const jobRoutes = require('./routes/job.route');
app.use('/job',jobRoutes);

const followRoutes = require('./routes/follow.route');
app.use('/following',followRoutes);

const applicantRoutes = require('./routes/applicant.route');
app.use('/applicant',applicantRoutes);

app.listen(process.env.PORT,(err)=>{
    if(err)throw err;
    console.log(`server running on port ${process.env.PORT}`);
})