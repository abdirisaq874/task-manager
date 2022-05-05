// const square = function(x){
//     return x*x
// }

// const square = (x) =>{
//     return x*x
// }

//const square = (x) => x*x

const event ={
    name: 'birthday Party',
    guestList:['andrew','jen','mike'],
    printGuestList() {
        console.log("guest list For " + this.name)
        this.guestList.forEach((guest)=>{
            console.log(guest + "  is attending "+ this.name)
        })
    }
}
event.printGuestList()
