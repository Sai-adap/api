const express=require('express');
const { OrderedBulkOperation } = require('mongodb');
const router=express.Router()
const mongoose=require('mongoose');
const Post=mongoose.model("Post")
const Order=mongoose.model("Order");
router.post("/inventory",async (req,res)=>{
    let post=new Post(req.body)
    let result=await post.save()
    res.send(result)
})

router.get("/inventorylist",async(req,res)=>{
   let post=await Post.find()
   if(post.length>0){
    res.send(post)
   }else{
    res.send({post:"no data found"})
   }
})
router.get("/inventory/electronic",async (req,res)=>{
    let post=await Post.find()
    if(post.length>0){
        res.send(post)
    }else{
        res.send({post:"no data found"})
    }
})
router.get("inventory/furniture", async (req,res)=>{
    let post=await Post.find()
    if(post.length>0){
        res.send(post)
    }else{
        res.send({post:"no data found"})
    }
})
router.post("/order",(req,res)=>{
    const order=new Order({
     _id:mongoose.Types.ObjectId(),
     quantity:req.body.quantity,
     product:req.body.productId
    });
    order.save().then(result=>{
        console.log(result)
        res.status(201).json(result)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        });
    });


})
module.exports=router