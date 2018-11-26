import React from 'react';
import InfoInput from './components/InfoInput'
import axios from 'axios'
import ShowCountryInfo from './components/ShowCountryInfo'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countryName: '',
      countryInfo: []
    }
  }

  componentDidMount(){
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(responce => {
        this.setState({countryInfo: responce.data})
      })
  }

  handleCountryClick = (event) => {
    
  } 

  handleChange = (event) => {
    let change = {}
    change[event.target.name] = event.target.value

    this.setState(change)      
  }

  render() {
    const filteredCountries = this.state.countryInfo.filter(country => country.name.toUpperCase().includes(this.state.countryName.toUpperCase()))

    return (
      <div>
        <InfoInput text = "find countries:" name = "countryName" value = {this.state.countryName} handleChange={this.handleChange} />

        <ShowCountryInfo countryList = {filteredCountries} />
        
      </div>
    )
  }
}

export default App