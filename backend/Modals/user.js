const mongoose = require('mongoose')
var Schema = mongoose.Schema;
var userSchema=new Schema({
    username:String,
    passkey:String,
  /*  emailId:{type : String , unique : true},
    mobileNo:{
        type : Number },
    address1: {
        type : String
        }*/
    });
    const userModel = mongoose.model("users", userSchema)
    module.exports  =userSchema ;
    /*/*
Dependencies
*/
const express = require('express')
const mongoose = require('mongoose')
const bodyParser =require ('body-parser');
const  cors = require('cors');
const userModel = require('./user')
/*
Dependencies
*/


//Port
const PORT = process.env.PORT || 3000
//Port


//Express
const app = express()
app.use(cors())
app.use(bodyParser.json());
app.use(express.json());
//Express

//db
mongoose.connect('mongodb://localhost:27017/testing')
app.post('/newUser', (req, res)=>{
    userModel.insertOne({name:"Johnny", passkey:'1234'})
    .then(users=>{
        res.json()
    }).catch(err=>{ res.json(err)})
})


//db





//server
app.listen(PORT, (err, res)=>{
    if (err) throw err
    console.log("Listening on port "+PORT)
})
//servers */