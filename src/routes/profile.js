const express = require('express');

const profileRouter= express.Router();
const {userAuth}= require("../middlewares/auth");
const {validateEditProfileData}=require("../utils/validation");

profileRouter.get("/profile/view",userAuth,async (req,res) => {

   try{
    const user = req.user;

    res.send(user);
   }catch(err){
        res.status(404).send("Error saving the user:" + err.message);
    }
});

profileRouter.patch("/profile/edit", userAuth, async(req,res)=>{
    try{
       if(!validateEditProfileData(req)) {
        throw new Error("Invalid Edit Request");
       }

       const loggedInUser = req.user;

       Object.keys(req.body).forEach((key)=>(loggedInUser[key]= req.body[key]));
    //    console.log(req.body);

       await loggedInUser.save();
            // console.log(loggedInUser);


    //    res.send("Profile Updated Successfully");
    //    res.send(`${loggedInUser.firstName}, Your Profile Updated Successfully`);

    //good way of sending response
       res.json({
        message: `${loggedInUser.firstName}, Your Profile Updated Successfully`,
        data: loggedInUser,
    });

    }
    catch(err) {
        res.status(400).send("ERROR: "+ err.message);
    }
})

module.exports = profileRouter;