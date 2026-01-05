const mongoose = require('mongoose');
const { MONGO_URI } = require('../constants/secrets');


const connectDB = async()=> {
    await mongoose.connect(
   MONGO_URI
);
};

module.exports = connectDB;

// connectDB()
//     .then(()=>{
//     console.log("Database connection establised...");
//     })  
//     .catch(err=>{
//     console.log("Database cannot be connected...");

// })
