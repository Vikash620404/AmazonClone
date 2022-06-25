console.log('Hello, World');
  const express=require('express');

   const mongoose=require('mongoose');
  const authRouter=require("./routes/auth");
  const PORT=3000;
  const app=express();
  const DB="mongodb+srv://vikash:Vikash8044@cluster0.h7uvj.mongodb.net/?retryWrites=true&w=majority"
  app.use(express.json())
  app.use(authRouter);
 

  mongoose.connect(DB).then(()=>{
  console.log('Connection Successfull')
  }).catch(e=>{
      console.log(e);
  })
  app.listen(PORT,"0.0.0.0",()=>{
  console.log(`connected at port ${PORT}`)
  })
