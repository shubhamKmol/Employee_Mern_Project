import express, { json } from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.js";
import employeeRoute from "./routes/employeeRoute.js"

dotenv.config();
await connectDB();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("running")
})

app.use("/api/employees",employeeRoute)

const PORT = process?.env?.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`running at ${PORT} PORT`)
})

