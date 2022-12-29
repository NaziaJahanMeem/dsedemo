import Company from "../../../../models/company";
import connectDb from "../../../../db_connect/connectDb.js"

const handler=async(req,res)=>{
    const {code}=req.query
    const company= await Company.findOne({code:code})
    res.status(200).json(company)
}
export default connectDb(handler);