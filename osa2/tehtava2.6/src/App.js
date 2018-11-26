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
    const newObject = {
        name: this.state.newName
    }
    const newPersons = this.state.persons.concat(newObject)
    this.setState({
        persons: newPersons,
        newName: ''
    })
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