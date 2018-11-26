const mongoose = require('mongoose')
const Login = require('../login')

mongoose.connect(Login)

const Person = mongoose.model('Person', {
  name: String,
  number: String
})

module.exports = Person