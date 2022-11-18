  const express=require('express');
  const User = require('../models/USER');
   const bcryptjs=require('bcryptjs');
 const authRouter=express.Router();
  authRouter.post("/api/singup",async (req,res)=>{
    try{
        const{name,email,password}=req.body;


const existingUser=await User.findOne({email});
if(existingUser){
    return res.status(400)
    .json({msg:'User with same email already exists!'})
}
const hashedPassword=await bcryptjs.hash(password,8);
let user=new User({
email,
password:hashedPassword,
name,
}
);
user=await user.save();
res.json(user);


    }catch(e)
    {
        res.status(500).json({error:e.message});
    };
  });
  module.exports=authRouter;
