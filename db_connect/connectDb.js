import mongoose from "mongoose";
const connectDb=handler=>async(req,res)=>{
    if(mongoose.connections[0].readyState){
        return handler(req,res)
    }
    const db_uri = 'mongodb+srv://me:1234@cluster0.rmb1qgk.mongodb.net/mdsdata?retryWrites=true&w=majority';
    
    await mongoose.connect(db_uri)
    return handler(req,res);
}
export default connectDb;