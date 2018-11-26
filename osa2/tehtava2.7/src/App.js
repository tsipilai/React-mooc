import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' }
      ],
      newName: ''
    }
  }

  handleChange = (event) => {
      this.setState({newName: event.target.value})
  }

  ButtonClick = (event) => {
    event.preventDefault()
    console.log(this.state.persons)
    console.log(this.state.newName)
    
    if(!this.state.persons.some(item => item.name === this.state.newName)){    

        const newObject = {
            name: this.state.newName
        }
        const newPersons = this.state.persons.concat(newObject)
        this.setState({
            persons: newPersons,
            newName: ''
        })
    }
    else{
        alert('Kyseinen nimi on jo listalla!!!')
    }
  }

  ShowPerson = (props) => {
      return(
          <div>{props.name}</div>
      )
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form>
          <div>
            nimi: 
            <input value ={this.state.newName} 
                   onChange={this.handleChange}/>
          </div>
          <div>
            <button onClick={this.ButtonClick} type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>

        {this.state.persons.map(person => <this.ShowPerson key = {person.name} name ={person.name} />)}
      </div>
    )
  }
}

export default App