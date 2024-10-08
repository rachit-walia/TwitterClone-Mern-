import express from "express"
import dotenv from "dotenv";
import {databaseConnection} from "./config/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js"
dotenv.config({
    path:".env"
})
databaseConnection();
const app=express();

// middlewares

app.use(express.urlencoded({
    extents:true
}));
app.use(express.json());
app.use(cookieParser());

// api
app.use("/api/v1/user",userRoute);



app.listen(process.env.PORT,()=>{
    console.log(`Server listen at port ${process.env.PORT}`)
})