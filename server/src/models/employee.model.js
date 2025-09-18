import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    dept: { type: String, required: true },
    role: { type: String, required: true },
    startDate: { type: Date, required: true },
    salary: { type: Number, required: true },
    probationEnd: { type: Date }
})
 
const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;
