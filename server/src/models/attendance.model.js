import mongoose from "mongoose";


const attendanceSchema = new mongoose.Schema({
employeeId: {type: mongoose.Schema.Types.ObjectId, ref:"Employee", required:true},
date:{type:Date, required: true},
CheckInTime:{type:Date},
CheckOutTime:{type:Date},
totalHours:{type: Number, default: 0},
  status: { type: String, enum: ["present", "absent", "leave"], default: "present" }
},
{timestamps:true});




export const Attendance = mongoose.model("Attendance", attendanceSchema);


