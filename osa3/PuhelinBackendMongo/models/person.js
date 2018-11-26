const mongoose = require('mongoose')

let database = 'Person'
if (process.env.NODE_ENV !== 'production' ) {
    require('dotenv').config()
    database = 'dev_Person'
}

const url = process.env.MONGODB_URI

mongoose.connect(url, { useNewUrlParser: true })

const Person = mongoose.model(database, {
    name: String,
    number: String
})

Person.format = (person) => {
    return{
        name: person.name,
        number: person.number,
        id: person._id
    }
}

module.exports = Person