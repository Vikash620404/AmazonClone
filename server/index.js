consol.log("Hello World");
const express=require('express');
const PORT=3000;


const app=express();
app.get('/hello-world',(req,res)=>{
res.send('Hello World')
})
app.listen(PORT,()=>{
console.log(`connected at port ${PORT}`)
})
