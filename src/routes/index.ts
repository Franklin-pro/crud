import express,{Router} from "express"

import userRouter from "../routes/userRoutes"
import newsRoutes from "../routes/newsRoutes"

const router:Router=express.Router()
router.use("/user",userRouter)
router.use("/news",newsRoutes)
export default router