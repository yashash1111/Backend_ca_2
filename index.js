const express = require('express')
const app = express()
const PORT = 3010
const dotenv = require('dotenv')
const { default: mongoose } = require('mongoose')
dotenv.config()

app.use(express.json())

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("Connected to MongoDB succesfully"))
.catch((err)=>console.log("Error connecting to MongoDB"))


app.post('/users/login', (req,res)=>{
    try{
    const login = {email, passward}=req.body
    if(!email){
        res.send(400).json({error:"Email cannot be empty"})
    }
    else if(!passward){
        res.send(400).json({error:"Passward cannot be empty"})
    }
    const Task = new login({email,passward})
    Task.save()
    res.send(200).status("Data saved Succesfully")
    }
    catch(err){
        res.send(500).status("Internal server error")
    }
})

app.listen(PORT, ()=>{
    console.log(`Server is running in localhost https://localhost:${PORT}`)
})