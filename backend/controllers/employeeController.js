import Employee from "../models/employee.js"


export const createEmployee = async (req, res) => {
    try {
        const { name, email, department, role, salary, joiningDate } = req.body;

           const employee = await Employee.create({
      name,
      email,
      department,
      role,
      salary,
      joiningDate,
    });

    return res.status(201).json({
      success: true,
      message: "Employee created successfully",
      data: employee,
    });

        res.status(200).json({
            success: true,
            message: "Employee sucessfully added",
            data: employee
        })







    } catch (error) {
        return res.status(500).json({
            sucess: false,
            message: error.message
        })
    }
}

export const getEmployee=async(req,res)=>{
    try {
        const employee= await Employee.find();
        return res.status(200).json({
            sucess:true,
            length:employee.length,
            data:employee
        })
    } catch (error) {
        
    }
}
