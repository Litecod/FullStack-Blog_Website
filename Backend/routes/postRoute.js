import express from "express"
import { addPost } from "../controllers/postController.js"
import authUser from "../middleware/auth.js"



const useRouter = express.Router()

useRouter.post("/add", authUser, addPost)

export default useRouter