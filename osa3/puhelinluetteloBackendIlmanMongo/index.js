const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

let persons = [
    {
        name: "Arto Hellas",
        number: "040-123456",
        id: 1
    },
    {
        name: "Martti Tienari",
        number: "040-123456",
        id: 2
    },
    {
        name: "Arto Järvinen",
        number: "040-123456",
        id: 3
    },
    {
        name: "Lea Kutvonen",
        number: "040-123456",
        id: 4
    }    
]

app.use(cors())
app.use(bodyParser.json())
app.use(express.static('build'))

//Morgan conf
morgan.token('data', function(req, res){
    return JSON.stringify(req.body)
})
app.use(morgan(':method :url :data :status :res[content-length] - :response-time ms'))


app.get('/api/persons/', (req, res) => {
    res.send(persons)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(p => p.id === id)
    
    if(person){
        res.json(person)
    }
    else{
        res.status(404).end()
    }
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(p => p.id !== id)
    res.status(204).end()
})

app.post('/api/persons/', (req,res) => {
    const body = req.body
    if(!body.name){
        return res.status(400).json({error: 'name is missing'})        
    }
    else if(!body.number){    
        return res.status(400).json({error: 'number is missing'})  
    }
    else if(persons.some(p => p.name === body.name)){
        return res.status(400).json({error: 'name must be unique'})  
    }

    const note ={
        name: body.name,
        number: body.number,
        id: Math.round((Math.random() * 10000))
    }
    persons = persons.concat(note)

    res.json(note)

    
})

app.get('/info', (req, res) => {
    const reply = `<p>puhelinluettelossa ${persons.length} henkilön tiedot</p>`+
                   `<p>${Date()}</p>`
    res.send(reply)
})


const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})