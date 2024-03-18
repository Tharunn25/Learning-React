require ('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Me!')
})

app.get('/twitter', (req, res) => {
    res.send('Tharunn')
})

app.get('/login',(req,res)=>{
  res.send('<h1>Please login at chai aur code</h1>')
})

app.get('/yt',(req,res)=>{
  res.send('<h2>Tharunn Codes</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

























 /* const express = require('express')
const app = express()
const port = 3009

app.get('/',(req,res)=>{
    res.send('Hello World !')
});

app.get('/X',(req,res)=>{
    res.send("Tharunn Here")
})

app.listen(port,()=>{
    console.log(`Example of app listening on port ${port}`)

});

app.listen(port,()=>{
    console.log(`Example of the respond the X on the port ${port}`)
}) */