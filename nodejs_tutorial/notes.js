const fs = require('fs')
const chalk = require('chalk')

msg = function(){
    return "your notes..."
}
const addNote = (title,body) => {
    const notes = loadNotes()


    const duplicateNote = notes.find((note) => note.title === title)

    console.log(duplicateNote)
    if(!duplicateNote){
        notes.push({
            title: title,
            body : body
        })
        saveNotes(notes)
        console.log('new note Added')
    }
    else{
        console.log('Note title Taken')
    }
   
}

const saveNotes = (notes)=>{
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson)
}


const loadNotes = function(){
    try{
    const databuffer = fs.readFileSync('notes.json')
    const datajson = databuffer.toString()
    return JSON.parse(datajson)
    }catch(e){
        return []
    }
    
}

const removeNote= (title)=>{
    const notes = loadNotes()

    const notesToKeep = notes.filter((note)=>note.title !== title
    )

    if(notesToKeep.length === notes.length){
        console.log(chalk.red.inverse.bold("Note title doesn\'t exist"))
    }else{
        console.log(chalk.green.inverse.bold("Note Removed"))
        saveNotes(notesToKeep)
    }

}

const ListNotes= ()=> {
    const notes = loadNotes()
    console.log(chalk.blue.inverse.bold("your Notes ... "))
    notes.forEach(note => {
        console.log(note.title)
    });
    
}

const readNote = (title)=>{
    const notes = loadNotes()
    const search = notes.find((note)=>note.title === title)
    if(!search) {
        console.log(chalk.red.bold.inverse("No Note found"))
    }else{
        console.log(chalk.blue.bold(search.title) + " " + chalk.green.bold(search.body))
    }
} 

module.exports = {
    msg : this.msg,
    addNote : addNote,
    removeNote : removeNote,
    ListNotes : ListNotes,
    readNote : readNote,
} 