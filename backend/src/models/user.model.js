import mongoose, { Schema } from "mongoose";


const userSchema = new Schema (
    {
    end_year:{
        type:String,
    },
    intensity:{
        type:Number,
    },
    relevance:{
        type:Number,
    },
    likehood:{
        type:Number,
    },
    sector:{
        type:String,
    },
    topic:{
        type:String,
    },
    insight:{
        type:String,
    },
    url:{
        type:String,
    },
    region:{
        type:String,
    },
    impact:{
        type:String,
    },
    published:{
        type:String,
    },
    source:{
        type:String,
    },
    title:{
        type:String,
    },
    pestle:{
        type:String,
    },
    country:{
        type:String,
    },
    start_year:{
        type:String,
    },
    added:{
        type:String,
    },
    
})

export const User = mongoose.model("User", userSchema)