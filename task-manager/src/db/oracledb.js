const express = require("express")
const app = express()
const { query } = require('express');
const oracledb = require('oracledb');


oracledb.initOracleClient({libDir: '/home/ec2-user/mandeez-weather-application/instantclient_21_6'});



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
    try{
        const result = await connection.execute(query1);
            if(result.rows.length>0){
              console.log(result.rows)
              return (result.rows);
            }else throw new Error("whoops")   
    }
    catch(e){
      return e+ ""
    }
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

f(`select * from Nodetab`)

module.exports = f
