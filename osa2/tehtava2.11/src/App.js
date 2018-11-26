import React from 'react';
import Tietosyotto from './components/Tietosyotto'
import LisaaUusiHenkilo from './components/LisaaUusiHenkilo'
import Puhelinluettelo from './components/PuhelinLuettelo'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }

  componentDidMount(){
    axios
      .get('http://localhost:3001/persons')
      .then(responce => {
        this.setState({persons: responce.data})
      })
  }

  ButtonClick = (event) => {
    event.preventDefault()
    console.log(this.state.persons)
    console.log(this.state.newName)
    
    if(!this.state.persons.some(item => item.name === this.state.newName)){    

        const newObject = {
            name: this.state.newName,
            number: this.state.newNumber
        }
        const newPersons = this.state.persons.concat(newObject)
        this.setState({
            persons: newPersons,
            newName: '',
            newNumber: ''
        })
    }
    else{
        alert('Kyseinen nimi on jo listalla!!!')
    }
  }

  handleChange = (event) => {
    let change = {}
    change[event.target.name] = event.target.value

    this.setState(change)      
  }

  render() {
      const filteredNames = this.state.persons.filter(person => person.name.toUpperCase().includes(this.state.filter.toUpperCase()))
    return (
      <div>
        <h1>Puhelinluettelo</h1>

        <Tietosyotto text = "rajaa näytettäviä:" name = "filter" value = {this.state.filter} handleChange={this.handleChange} />

        <LisaaUusiHenkilo  newName="newName" nameValue={this.state.newName}
                           newNumber="newNumber" numberValue={this.state.newNumber} handleChange={this.handleChange}
                           buttonClick ={this.ButtonClick}
        />
        
        <h2>Numerot</h2>
        
        <Puhelinluettelo list ={filteredNames} />
        
      </div>
    )
  }
}

export default App