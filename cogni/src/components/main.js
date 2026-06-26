const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost:27017/asru')
.then((response) => {
    console.log(`Connected to Mongo DB Successfully..............`);
}).catch((err) => {
    console.error(err);
    process.exit(1); // stop the node js process if unable to connect to mongodb
});
const UserSchema =new mongoose.Schema({
    name: String,
    age:Number
})
 
const UserModel= mongoose.model("users",UserSchema)
app.get('/users',async (req,res)=>{
    try {
        let users = await UserModel.find();
        res.status(200).json(users);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            msg : err.message
        });
    }
})

app.listen(3030,()=>{
    console.log("server is running on https://localhost:3030/users")
})
