// import express from 'express'
//& same thing we can use import express or const express
// const express = require('express')

require('dotenv').config()
console.log(process.env)

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter' , (req,res)=>{
    res.send('pranay-chhibber')
})
app.get('/login' , (req,res) =>{
    res.send('<h1>please login</h1>')
})
app.get('/youtube' , (req,res) =>{
    res.send('<h2>Chai aur Code</h2>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})