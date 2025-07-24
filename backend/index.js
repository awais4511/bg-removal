import "dotenv/config";
import express from 'express';
import cors from 'cors';
import connectdb from "./config/mongodb.js";
// import userRouter from "./routes/userRoute.js";
// import imageRouter from "./routes/imageRoute.js";


const Port =process.env.Port || 4000;
const app=express();

app.use(express.json())
app.use(cors())
await connectdb();

app.get('/',(req ,res)=>{
    res.send("Api Working")
})
// app.use("/api/user",userRouter)
// app.use("/api/image",imageRouter)


app.listen(Port ,()=>console.log("server is running on port " + Port))