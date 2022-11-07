const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true
    }
})
mongoose.model("User",userSchema);