import { hashPassword } from "../helpers/authHelper.js"
import userModel from "../models/userModel.js"
export const registerController=async(req,res)=>{
    try {
        const {name,email,password,contactno,workstatus}=req.body
        const existingUser=await userModel.findOne({email})
        if(existingUser){
            return res.status(200).send({
                message:'ALready registered.Please Login'
            })}
        const hashedPassword=await hashPassword(password)
        const user=await new userModel({name,email,password:hashedPassword,contactno,workstatus}).save()
        res.status(201).send({
            success:true,
            message:'User registered successfully',
            user
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:error
        })
    }
}