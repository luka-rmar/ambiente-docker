const express = require('express')
const conn = require('./app')

const app = express()


app.get('/', (req, res)=>{
  return res.json({message:'ola amigos lindos'})
})

app.listen(3000, ()=>{
  console.log("Servidor rodando na porta 3000")
})