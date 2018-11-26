import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas',
          number: '040-12354678' }
      ],
      newName: '',
      newNumber: ''
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
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form>
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
                {this.state.persons.map(person => <this.ShowPerson key = {person.name} name ={person.name} number = {person.number} />)}
            </tbody>
        </table>
      </div>
    )
  }
}

export default App