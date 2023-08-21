const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 3000
const uri = "mongodb://localhost:27017"

mongoose.connect(uri)
app.listen(PORT, (err, res)=>{
    if (err) throw err
    console.log("Listening on port "+PORT)
})
// mongodb+srv://jessicaaki:<password>@users.vqad2mb.mongodb.net/
//mongodb+srv://jessicaaki:<password>@users.qc9f7jc.mongodb.net/?retryWrites=true&w=majority
//h1RIw5kpdS3IEZQJ