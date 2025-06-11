import express from 'express'
import "dotenv/config";
import cors from 'cors';
import connectDB from './configs/db.js';
import { clerkMiddleware } from '@clerk/express'

connectDB()

const app =express()

app.use(cors())
app.use(express.json())
app.use(clerkMiddleware())



//api to listen cleark webhooks

app.use("/api/clerk", clerkMiddleware)
app.get('/',(req,res)=>res.send("Api is working"))


const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>
    console.log(`Server is running on port ${PORT}`)

)