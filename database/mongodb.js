import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

if(!DB_URI){
    throw new Error("Please define MONGODB_URI inside the .env.<development/production>.local");
}

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log(`connected to the DB in ${NODE_ENV} mode...`);
    } catch (error) {
        console.error(error);
        process.exit();
    }
}

export default connectToDatabase;