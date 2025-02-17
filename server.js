const express=require('express')
const app=express()
const dotenv=require('dotenv')

dotenv.config()

app.get('/',(req,res)=>{
    res.send("Welcome to job portal")
})

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`)
});