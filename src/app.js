const express = require("express");

const connectDB= require("./config/database");

const User = require("./models/user");

const app=express();

const cookieParser = require("cookie-parser");

const {userAuth}= require("./middlewares/auth");

const cors= require("cors");

app.use(cors({
    origin:"http://localhost:5173",
    credentials: true,

})
);

app.use(express.json()); //middleware
app.use(cookieParser()); //middleware

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");
const userRouter = require("./routes/user");


app.use("/",authRouter);
app.use("/",profileRouter);
app.use("/",requestRouter);
app.use("/",userRouter);


connectDB()
    .then(()=>{
    console.log("Database connection establised...");
    app.listen(1111,()=>{
    console.log("server is successfully running on port 1111");
});
    })  
    .catch(err=>{
    console.log("Database cannot be connected...");

})