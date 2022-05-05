const { error } = require("console")
const http = require("http")

const url = "http://api.weatherstack.com/current?access_key=3998060f0cbb2883d137f3fb94b0b93f&query=45,-75"

const request = http.request(url,(Response)=>{

    let data = ""

    Response.on('data',(chunk)=>{
        data = data+ chunk.toString()
    })

    Response.on('end',()=>{
        console.log(JSON.parse(data))
    })
})

request.on('error',(error)=>{
    console.log(error)
})
request.end()