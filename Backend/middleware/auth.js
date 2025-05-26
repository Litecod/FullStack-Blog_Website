import jwt from "jsonwebtoken"

const authUser = async (req, res, next) => {
    const { tokenss } = req.headers;

    if (!tokenss) {
        return res.json({success: false, message: "Not Found Try Again"})
    }
    try {
        const token_decode = jwt.verify(tokenss, process.env.JWT_SECRET)
        
        req.body.userId = token_decode.id
        next()
    } catch (error) {
        console.log(error)
        res.json({successs: false, message: error.message})   
    }
}

export default authUser


