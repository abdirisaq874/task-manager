const chalk = require('chalk')
const yargs = require('yargs')
const fs = require('fs')
const notes = require('./notes.js')

// console.log(chalk.blue.inverse.bold(getNotes()))
// console.log(process.argv[2])

yargs.version('1.1.0')

// create add command
yargs.command({
    command:'add',
    describe: "add a new note",
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type:'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
    
})

//create a remove command

yargs.command({
    command: 'remove',
    describe:'removing a command',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv) { 
        notes.removeNote(argv.title)
    }
    
})

yargs.command({
    command:'list',
    describe:'listing a command',
    handler(argv){
        notes.ListNotes()
    }
})

yargs.command({
    command: "read",
    describe : "reading a command",
    builder : {
        title:{
            describe: "Note title",
            demandOption : true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.argv


// const command = process.argv[2]
// if( command=== 'add'){
//     console.log('adding note')
// }
// else if (command==='remove'){
//     console.log('removing note')
// }

// fs.writeFileSync('note.txt','new note')