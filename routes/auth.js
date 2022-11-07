const { Router } = require('express');
const express=require('express')
const router=express.Router();
const mongoose=require("mongoose")
const User=mongoose.model("User")
router.post("/details",async(req,res)=>{
    let user=new User(req.body);
    let result=await user.save();
    res.send(result)
})
module.exports=router;