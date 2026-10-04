import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: "true"
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    department: {
        type: String,
        required: true,

    },
    salary: {
        type: Number,
        min: 0
    },
    role: {
        type: String,
        required: true
    },
    joiningDate: {
        type: Date,
        required: true
    }
}, {
    timestamp: true
})

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;