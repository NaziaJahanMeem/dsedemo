import User from "../../../models/user.js";
import connectDb from '../../../db_connect/connectDb.js';
var CryptoJS=require("crypto-js")
var jwt = require('jsonwebtoken');
const handler=async (req,res)=>{
    if(req.method=='POST'){
        //console.log(req.body)
        let user=await User.findOne({"email":req.body.email})
        if(req.body.email==''){
            res.status(400).json({error:"Please enter your email"})
        }else if(req.body.password==''){
            res.status(400).json({error:"Please enter your Password"})
        }
        if(user){
            const bytes=CryptoJS.AES.decrypt(user.password,'secret123');
            let decryptedPass=bytes.toString(CryptoJS.enc.Utf8);
            if(req.body.email==user.email && req.body.password==decryptedPass){
                var token = jwt.sign({email:user.email,firstName:user.firstName,lastName:user.lastName}, 'fa34e0f785b4a564f7547e218cca68da'
                ,{expiresIn: '24h'});
                
                res.status(200).json({success:true,token})
            }else{
                res.status(200).json({error:"Invalid Credentials"})
            }
        }else if(!user){
            res.status(400).json({error:"No user found"})
        }
    }
}
export default connectDb(handler);