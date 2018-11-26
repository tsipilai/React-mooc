import React from 'react';
import Tietosyotto from './components/Tietosyotto'
import LisaaUusiHenkilo from './components/LisaaUusiHenkilo'
import Puhelinluettelo from './components/PuhelinLuettelo'
import ContactsService from './services/contactsService'
import Notification from './components/notification'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: '',
      notification: null
    }
  }

  componentDidMount(){
    ContactsService.getAll()
      .then(response => {
        this.setState({persons: response})
      })
  }

  ButtonClick = (event) => {
    event.preventDefault()   

    const foundPerson = this.state.persons.find(p => p.name === this.state.newName)
    const newObject = {
      name: this.state.newName,
      number: this.state.newNumber
    }
    if(!foundPerson){    

        const newObject = {
            name: this.state.newName,
            number: this.state.newNumber
        }

        ContactsService.create(newObject)
          .then(response => {
            this.setState({
              persons: this.state.persons.concat(response),
              newName : '',
              newNumber: ''
            })
            this.setNotificationMessage(`lisättiin ${newObject.name}`)
          })
    }
    else{
      const replace = window.confirm(`${this.state.newName} on jo luettelossa, korvataanko vanha numero uudella?`);
      if(replace){
        ContactsService.update(foundPerson.id, newObject)
          .then(response => {
            this.setState({
              persons: this.state.persons.map(p => p.id !== foundPerson.id ? p : response),
              newName : '',
              newNumber: ''
            })            
            this.setNotificationMessage(`päivitettiin ${newObject.name}`)
          })
          .catch(error => {
            this.setNotificationMessage(`henkilöä ${newObject.name} ei löydetty palvelimelta, poistetaan listalta`)
            const updatedPersons = this.state.persons.filter(p => p.name !== newObject.name)
            this.setState({
              persons : updatedPersons
            })
          })
      }
    }
  }

  setNotificationMessage = (message) => {
    this.setState({notification : message})
    setTimeout(() => {
      this.setState({notification : null})
    }, 5000);
  }

  handleChange = (event) => {
    let change = {}
    change[event.target.name] = event.target.value

    this.setState(change)      
  }

  deletePerson = (event) => {
    const targetID = event.target.id
    const allPersons = this.state.persons
    const personToBeRemoved = allPersons.find(p => p.id === targetID || p.id === Number(targetID))
        
    const remove = window.confirm(`poistetaanko ${personToBeRemoved.name}`);
    
    if(remove){
      ContactsService.deleteContact(personToBeRemoved.id)
        .then(response => {
          let personsList = this.state.persons.filter(p => p.id !== targetID)
          personsList = this.state.persons.filter(p => p.id !== Number(targetID)) //Jotta vanha versio toimii
          
          this.setState({
            persons: personsList
          })
          this.setNotificationMessage(`poistettiin ${personToBeRemoved.name}`)
        })
    }
  }

  render() {
      const filteredNames = this.state.persons.filter(person => person.name.toUpperCase().includes(this.state.filter.toUpperCase()))
    return (
      <div>
        <h1>Puhelinluettelo</h1>
        <Notification message={this.state.notification} />

        <Tietosyotto text = "rajaa näytettäviä:" name = "filter" value = {this.state.filter} handleChange={this.handleChange} />

        <LisaaUusiHenkilo  newName="newName" nameValue={this.state.newName}
                           newNumber="newNumber" numberValue={this.state.newNumber} handleChange={this.handleChange}
                           buttonClick ={this.ButtonClick}
        />
        
        <h2>Numerot</h2>
        
        <Puhelinluettelo list ={filteredNames} deleteContact={this.deletePerson} />
        
      </div>
    )
  }
}

export default App