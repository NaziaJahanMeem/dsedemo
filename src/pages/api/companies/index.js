import Company from "../../../../models/company";
import connectDb from "../../../../db_connect/connectDb.js"

const handler=async(req,res)=>{
    let companies=await Company.find()
    res.status(200).json(companies)
}
export default connectDb(handler);