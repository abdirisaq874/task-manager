const express = require("express")
const app = express()
const db = require("./db/oracledb.js")
const forecast = require('./../web-server/src/utils/forecast')


const port =process.env.PORT || 4100

app.use(express.json())

app.listen(port,()=>{
    console.log("Server is up on port " + port)
})

const id = 5522617216
app.post("/users",(req,res)=>{
  db(`select * from Nodetab where id =`+id).then(ok => {
    res.send(ok)
  })
  .catch(err => {
    console.error(err)
  })  
})




