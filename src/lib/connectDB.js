const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
import Sin from "./model/sin.js";
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MongoURI);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

export { connectDB };
