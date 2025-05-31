import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {


try {
    const connection = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB connected:${connection.connection.host}`); 
} catch (error)
{
 console.log("error connecting to mongo:", error.message);
 process.exit(1);
}

}


//mongodb+srv://cong3535c:DYBDebymSBg8O92a@cluster0.j9p53.mongodb.net/Ecomerce_db?retryWrites=true&w=majority&appName=Cluster0