// setTimeout(()=>{
//     console.log("the seconds are up")
// },2000)

// const names = ['andrew','mandeez','jess']
// const shortname = names.filter((name)=> name.length<=4)

// const geocode = (address,callback)=>{
//     setTimeout(()=>{
//         const data = {
//             latitude:0,
//             longtitude : 0
//         }
//         callback(data)
//     },2000)
// }

// geocode("bosaso",(data)=>{
//     console.log(data)
// })

debugger
const add = (a,b,sum)=>{
    setTimeout(()=>{
        sum(a+b)
    },2000)
}
add(1,4,sum=>{
    console.log(sum)
})