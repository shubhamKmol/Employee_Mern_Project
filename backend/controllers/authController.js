export const registerEmp= async(req,res)=>{
    try {
        res.json({
            message:"Api running"
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }

}