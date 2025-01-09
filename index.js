import "dotenv/config"
import express from "express"
import mongoose from "mongoose"
import connectDB from "./data base/dataBase.js"
import router from "./routes/studentRoutes.js"

const port=process.env.PORT || 8000

const app=express();

app.use(express.json())
app.use("/api/student",router);

connectDB(process.env.MONGO_URI)

app.get("/",(req,res)=>{
    res.send("Welcome to home page");
})


app.listen(port,()=>{
    console.log(`Server is online at the link: https://localhost:${port}`)
})