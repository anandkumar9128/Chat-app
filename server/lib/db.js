import mongoose, { mongo } from "mongoose";

// Function to connect to MongoDB
export const connectDb=async()=>{
    try {
        mongoose.connection.on('connected',()=>console.log('MongoDB connected successfully'));
        await mongoose.connect(`${process.env.MONGODB_URI}/Chat-app`);
    } catch (error) {
        console.log("Error in connecting to MongoDB",error);
    }
}
