const express=require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const urlRoutes=require("./routes/urlRoutes");
const logger=require("./middleware/logger");
const app=express();
dotenv.config();
app.use(express.json());
app.use(logger);
app.use("/",urlRoutes);


mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(3000,()=>{
            console.log("sever connected");
        })
    }).catch(err =>console.log(err));