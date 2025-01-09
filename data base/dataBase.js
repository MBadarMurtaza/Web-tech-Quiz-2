import mongoose from "mongoose";

const connectDB = async () =>{
    try {
        const connect = await mongoose.connect(process.env.URI)

    } catch (error) {
        console.log("Cannot connect to the Moongose!")
        console.log(error)
    }
}
export default connectDB;