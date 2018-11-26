const mongoose = require('mongoose')
const login = require('./login') //palauttaa mongodb://... stringin

mongoose.connect(login)

const Person = mongoose.model('Person', {
  name: String,
  number: String
})

const args = process.argv.slice(2)
const name = args[0]
const number = args[1]

if(name){
    const person = new Person({
        name: name,
        number: number
      })
      
    console.log(`lisätään henkilö ${name} numero ${number} luetteloon`)    
      person
        .save()
        .then(response => {
          console.log('note saved!')
          mongoose.connection.close()
        })
}
else{
    Person
        .find({})
        .then(result => {
            console.log('puhalinluettelo:')
            result.forEach(person => {
                console.log(`${person.name} ${person.number}`)
            })
            mongoose.connection.close()
        })
}



