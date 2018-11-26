import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Martti Tienari', number: '040-123456' },
        { name: 'Arto Järvinen', number: '040-123456' },
        { name: 'Lea Kutvonen', number: '040-123456' }
      ],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }

  handleChange = (event) => {
    let change = {}
    change[event.target.name] = event.target.value

    this.setState(change)      
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

  ShowPerson = (props) => {
      return(
        <tr>
            <td>{props.name}</td>
            <td>{props.number}</td>   
        </tr>
      )
  }

  render() {
      const filteredNames = this.state.persons.filter(person => person.name.toUpperCase().includes(this.state.filter.toUpperCase()))
    return (
      <div>
        <h1>Puhelinluettelo</h1>
        <div>
            rajaa näytettäviä: 
            <input name="filter"
                   value ={this.state.filter} 
                   onChange={this.handleChange}/>
        </div>
        
        <form>
        
        <h2>Lisää uusi</h2>

        <div>
            nimi: 
            <input name="newName"
                   value ={this.state.newName} 
                   onChange={this.handleChange}/>
        </div>
        <div>
            numero: 
            <input name="newNumber"
                   value ={this.state.newNumber} 
                   onChange={this.handleChange}/>
        </div>
          
        <div>
        <button onClick={this.ButtonClick} type="submit">lisää</button>
        </div>

        </form>
        <h2>Numerot</h2>
        
        <table>
            <tbody>
                {filteredNames.map(person => <this.ShowPerson key = {person.name} name ={person.name} number = {person.number} />)}
            </tbody>
        </table>
      </div>
    )
  }
}

export default App