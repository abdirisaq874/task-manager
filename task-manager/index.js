const express = require("express")
const app = express()
const db = require("./src/db/oracledb.js")
const hbs = require("hbs")
const path = require('path')
const users = require("./src/model/users")


const port =process.env.PORT || 2000

app.set("view engine","hbs")
app.set("views", path.join(__dirname+"/templetes"))


app.use(express.json())

app.listen(port,()=>{
    console.log("Server is up on port " + port)
})


// app.post("/users",async (req,res)=>{
//     try{
//        res.send(await users(req.body))
//     }catch(err){
//         res.send(err + "")
//     }

// })

app.post("/users",(req,res)=>{
  const id = 583
  db(`select * from Nodetab where id =`+id).then(ok => {
    res.send(ok)
  }).catch((err) => {
    res.send(err)
  })  

})

// app.get('/name',(req,res)=>{
//   res.render("home",{title : "ahmed"})
// })



