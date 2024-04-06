const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const Usermodel = require('./models/users')

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://new_user18:user123@cluster0.bazvvyc.mongodb.net/users");

app.post("/register",(req, res)=>{
Usermodel.create(req.body)
.then(users => {
    res.json(users)
    // res.render({success:''})
})
.catch(err => res.json(err))
})

app.post("/login",(req,res)=>{
    const {email, password} = req.body;
    Usermodel.findOne({email: email})
    .then(user =>{
        if(user)
        {
            if(user.password === password){
                res.json("Success")
                // res.render({success:''})
            }else{
                res.json("Password is incorrect")
            }
        }
        else{
            res.json("Not found record please register")
        }
    })
})

app.listen(3000 ,()=>{
    console.log("server is running")
})

