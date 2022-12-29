import User from "../../../models/user.js";
import connectDb from '../../../db_connect/connectDb.js';
import {useSession,signIn,signOut} from 'next-auth/react'
var CryptoJS=require("crypto-js")
const handler=async (req,res)=>{
    
    let user=await User.findOne({"email":req.body.email})
    console.log(req.body)
    if(req.method=='POST'){
        if(req.body.firstName==''||req.body.lastName==''||req.body.email==''||req.body.password==''||req.body.cPassword==''){
            res.status(400).json({error:"Please Enter all your credentials."})
        }else if(req.body.password!=req.body.cPassword){
            res.status(400).json({error:"Confirm password is Not Matched."})
        }
        else if(user){
            res.status(400).json({error:"Email Already Exists."})
        }else{
            let u=new User({
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                email:req.body.email,
                password:CryptoJS.AES.encrypt(req.body.password,"secret123").toString()
            })
            
            await u.save()
            res.status(200).json({success:'success'})
        }
    }else{
        res.status(400).json({error:"This method is not allowed"})
    }
}
export default connectDb(handler);