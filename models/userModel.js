import mongoose from 'mongoose';
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
    },
    contactno:{
        type:Number,
        required:true
    },
    workstatus:{
        type:String
    },
},{timestamps:true})

export default mongoose.model('users',userSchema)