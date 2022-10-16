const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL)
.then(()=>{
    console.log("Database connected successfully");
})
.catch((err)=>{
    console.log(`Error database ${err.message}`)
});
