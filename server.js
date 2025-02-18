import express from 'express'
const app=express()
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import authRoute from './routes/authRoute.js'

dotenv.config()
connectDB()

app.use(express.json())

//routes
app.use('/api/v1/auth',authRoute)

app.get('/',(req,res)=>{
    res.send("Welcome to job portal")
})

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`)
});