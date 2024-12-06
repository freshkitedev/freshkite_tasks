import mongoose, { model, Schema } from "mongoose";

const Taskschema = new Schema({
    todo : {type:String, required:true},
    status : {type:String, required:true},
    user : {type:mongoose.Schema.Types.ObjectId, ref:'User', required:true}
}, {timestamps:true})

export const Taskmodel = model("task", Taskschema);