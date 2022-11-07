const express=require("express");
const mongoose=require("mongoose")
const app=express()
PORT=8080
const {MONGOURI}=require("./key")

require('./models/user')
require('./models/post')
require('./models/order')
app.use(express.json());
app.use(require('./routes/auth'))
app.use(require('./routes/post'))
mongoose.connect(MONGOURI);
mongoose.connection.on('connected',()=>{
    console.log("connected to mongoose")
})
mongoose.connection.on('error',(err)=>{
    console.log("error connecting",err)
})
app.listen(PORT,()=>{
    console.log("server running on port",PORT)
})