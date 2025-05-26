import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import UserRouter from "./routes/userRoute.js"
import PostRouter from "./routes/postRoute.js"


//APP config
const app = express()
const port = process.env.PORT || 4500
connectDB();
connectCloudinary();


//middleware
app.use(express.json())
app.use(cors())


//api endpoints
app.use("/api/user", UserRouter)
app.use("/api/post", PostRouter)

app.get("/", (req,res) => {
    res.send("Server Set")
})

app.listen(port, () => console.log("Server Started at " + port))