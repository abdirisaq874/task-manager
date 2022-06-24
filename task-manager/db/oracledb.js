const express = require("express")
const app = express()
const { query } = require('express');
const oracledb = require('oracledb');

oracledb.initOracleClient({libDir: process.env.HOME + '/Downloads/instantclient_19_8'});



const mypw = "14789632Abdi." // set mypw to the hr schema password

oracledb.autoCommit = true;




const f =async function run(query1) {

  let connection;

  try {
    connection = await oracledb.getConnection( {
      user          : "admin",
      password      : mypw,
      connectString : "db202204151733_high"
    });

    const result = await connection.execute(query1);
    return new Promise((res,rej)=>{
        if(result.rows){
          res(result.rows);
        }
        else{
          res("done it successfuly")
        }
    });
    //callback(result.rows)
  } catch(err) {
    console.log('Error in processing:\n', err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch(err) {
        console.log('Error in closing connection:\n', err);
      }
    }
  }
}

// run((result)=>{
//   app.post('/users',(req,res)=>{
//         console.log(req.body)
//         res.status(201).send("testing!." + result[0][0])
// })
// })


module.exports = f
