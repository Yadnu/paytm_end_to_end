const express = require("express");
const zod = require("zod");
const { User } = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config")
const router = express.Router();

const signupSchema = zod.object({
    username: zod.string(),
    password: zod.string(),
    firstName: zod.string(),
    password: zod.string()
    
})
router.post("/signup", async (req, res)=>{
    const body = req.body;
    const {success} = signupSchema.safeParse(req.body);
    if(!(success)){
        return res.json({
            message: "Email has already taken / Incorrect inputs"
        })
    }
    const user= User.findOne({
        username: body.username
    })
    if(user._id){
        return res.json({
            message: "Email has already taken / Incorrect inputs",
            token : token
        })

    }
    const dbUser = await User.create(body);
    const token = jwt.sign({
        userId: dbUser._id
    }, JWT_SECRET)
    res.json({
        message: "User created Successfully",
        token: token
    })
})


module.exports = router;