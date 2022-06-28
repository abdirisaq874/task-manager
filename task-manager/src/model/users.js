
const db = require("./../../src/db/oracledb.js")

const user = async (user)=>{
    if(user.name.length<4) {
        throw new Error("name must be greeater than 4")
    }
    else if(user.name=="ahmed"){
        throw new Error( "name cannot be Ahmed")
    }
    else await setTimeout(()=>{
        try{
            db(`select * from Nodetab where id =`+user.id).then(ok=>{
                throw new Error("Id has already been taken, try an other one") } ).catch((e)=>{ throw new Error("suufi")})
        }
         catch(e){
            return e + ""
       }
    },5000)
    
        
        

};

module.exports = user