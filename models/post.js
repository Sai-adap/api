const mongoose=require('mongoose');
const {objectId}=mongoose.Schema.Types
const postSchema=new mongoose.Schema({
    itemname:String,
    quantity:String,
    itemid:String,
    type:String,
    avilability:String,
    quantity:String
})
mongoose.model("Post",postSchema)