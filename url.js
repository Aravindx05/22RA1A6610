const mongoose= require("mongoose");
const urlSchema=new mongoose.Schema({
    originalUrl:{
        type:String,
        required:true
    },
    shortCode:{
        type:String,
        required:true
    },
    createdTime:{
        type:String,
        default:Date.now
    },
    expiresAt:{
        type:Date
    },
    clickCount:{
        type:Number,
        default:0
    },
    visits:[{
        timestamp:{
            type:Date,
            default:Date.now
        },
        ip:String,
        userAgent:String,
        referrer:String,
}]
})

module.exports=mongoose.model("Url",urlSchema);