const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/Logincollections")
.then(()=>{
    console.log("mongoose connected");
})
.catch(()=>{
    console.log("failed");
})

const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role: { 
        type: String,
        required: true, 
        enum: ["Student", "Parent"] }
})

const LogIncollection=new mongoose.model("Collection1",LogInSchema)

module.exports=LogIncollection