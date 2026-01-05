//till episode 9
// const adminAuth = (req,res,next)=>{
//     console.log("Admin auth is getting checked!!");
//     const token="xyz";
//     const isAdminAuthorized = token ==="xyz";
//     if(!isAdminAuthorized){
//         res.status(401).send("unauthorized request");
//     }
//     else{
//         next();
//     }
// };


// module.exports={
//     adminAuth,
// }

//ep 10

//importing required packages
const { JsonWebTokenError } = require("jsonwebtoken");

const jwt= require("jsonwebtoken");
const User = require("../models/user");
const { JWT_SECRET } = require("../constants/secrets");

//creating middleware function
const userAuth = async (req,res, next) =>{
    try{
       
        //reading token from cookies
        const {token} = req.cookies;


        //if token not exist throw an error
        if(!token) {
            // throw new Error ("Token is not valid");
            return res.status(401).send("Please Login!");
        }

        //verifying the token
        const decodedObj = jwt.verify(token, JWT_SECRET);

        // extracting user id from decoded data
        const {_id} = decodedObj;
        


        //fetching user from database
        const user = await User.findById(_id);

        //if user does not exist
        if(!user) {
            return next( new Error("User not found")
            );
        }

        req.user=user;
        //if everything is correct means the user is authenticated i.e moves to the next function/route
        next();
    } catch(err) {
        res.status(400).send("ERROR: "+err.message);
    }
};



module.exports={
    userAuth,
}