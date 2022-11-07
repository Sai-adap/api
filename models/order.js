const mongoose=require('mongoose')
const {objectId}=mongoose.Schema.Types
const orderSchema=new mongoose.Schema({
    itemname:String,
    quantity:String,
    itemid:String,
    type:String,
    availability:String,
    product:{
        type:String,
        default:1
    }
})
mongoose.model("Order",orderSchema)