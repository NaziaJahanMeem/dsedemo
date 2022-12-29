import User from "../../../models/user";
import connectDb from "../../../db_connect/connectDb.js"

const handler=async(req,res)=>{
    let users=await User.find()
    res.status(200).json({users})
}
export default connectDb(handler);