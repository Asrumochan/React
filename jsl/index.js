import express, { application } from "express";
import mongoose from 'mongoose';
import ApplicationRouter from "./Routes/application.routes.js";

const app = express()
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/asru")
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });


app.use((req,res,next)=>{
    console.log(`${req.method} ${req.url}`)
    next()
})
app.use("/applications", ApplicationRouter);

app.use((req,res)=>{
    res.status(404).json({
        success: false,
        message: "Route not found"
    })}
)

app.use((err,req,res,next)=>{
    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Internal Server error"
    })
})

app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000")
})