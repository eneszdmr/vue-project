import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const connectDb = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        console.log("mongo db connection is successfull");

        
    } catch (error) {

        console.log("mongo db connection has failed", error.message);
        throw error;
        
    }
}


export default connectDb;