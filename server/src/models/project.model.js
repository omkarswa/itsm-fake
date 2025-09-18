import mongoose  from "mongoose";

const projectSchema = new mongoose.Schema({
name:{type: String, required:true},
description:{type:String},
status:{type:String, enum:["planned", "Ongoing", "Completed","Ready-To-Use" ], default:"planned"},
assignedEmployees:[{type: mongoose.Schema.Types.ObjectId, ref:"Employee"}],

StartDate:{type:Date, required:true},
endDate:{type:Date, required:true}


},{timestamps:true});


export default mongoose.model("Project", projectSchema);