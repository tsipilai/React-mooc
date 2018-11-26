const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

app.use(cors())
app.use(bodyParser.json())
app.use(express.static('build'))

//Morgan conf
morgan.token('data', function(req, res){
    console.log(req.body)
    return JSON.stringify(req.body)
})
app.use(morgan(':method :url :data :status :res[content-length] - :response-time ms'))

app.get('/api/persons/', (req, res) => {
    Person
        .find({})
        .then(people => {
            res.json(people.map(Person.format))
        })
        .catch(error => {
            console.log(error)
        })
})

app.get('/api/persons/:id', (req, res) => {

    Person
        .findById(req.params.id)
        .then(person => {
            res.json(Person.format(person))
        })
        .catch(error => {
            console.log(error)
        })
})

app.delete('/api/persons/:id', (req, res) => {
    Person
        .findByIdAndRemove(req.params.id)
        .then(result => {
            res.status(204).end()
        })
        .catch(error => {
            res.status(400).send({error: 'malformatted id'})
        })
})

app.post('/api/persons/', (req,res) => {
    const body = req.body
    if(!body.name){
        return res.status(400).json({error: 'name is missing'})        
    }
    else if(!body.number){    
        return res.status(400).json({error: 'number is missing'})  
    }

    Person
        .find({ name: body.name })
        .then(result => {
            return result
        })
        .then(result => {
            if(result.length > 0){
                res.status(409).send({ error: 'Name already found from database' }).end()
            }
            else{
                const person = Person({
                    name: body.name,
                    number: body.number,
                    id: Math.round((Math.random() * 10000))
                })

                person
                    .save()
                    .then(savedPerson => {
                        res.json(Person.format(savedPerson))
                    })
                    .catch(error => {
                        console.log(error)
                    })
            } 
        })    
})

app.put('/api/persons/:id', (req, res) => {
    const body = req.body

    const person = {
        name: body.name,
        number: body.number
    }

    Person
        .findByIdAndUpdate(req.params.id, person, { new: true })
        .then(updatedPerson => {
            res.json(Person.format(updatedPerson))
        })
        .catch(error => {
            console.log(error)
            res.status(400).send({error : 'malfomatted id'})
        })
})

app.get('/api/info', (req, res) => {
    Person
        .find({})
        .then(response => {
            let reply = `<p>puhelinluettelossa ${response.length} henkilön tiedot</p>`+
                   `<p>${Date()}</p>`
            res.send(reply)
        })

        .catch(error => {
            console.log(error)
            let reply = `Databaseen ei saada yhteyttä`
            res.status(400).send({ error : reply })
        })
})   

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
