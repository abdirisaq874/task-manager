const geocode = require("./utils/geocode")
const forecast = require('./utils/forecast')
if(!process.argv[2]){
    console.log("please provide an address")
}else{
    callback=(error,{longtitude,latitude,location}={})=>{
    if(error)
    {
        console.log("Error " + error)
    } else
    {
        console.log("longtitude : " + longtitude + " \nlatitude: " + latitude + " \nlocation is : " + location)
        forecast(latitude,longtitude,(error,data)=>{
        if(error)
        {
            console.log(error)
        }
        else
        {
            console.log(data)
        }
    })
    
    }
}

geocode(process.argv[2],callback)

}