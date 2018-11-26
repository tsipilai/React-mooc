import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = ({teksti}) => <h1>{teksti}</h1>

const NaytaAnekdootti = ({numero}) => {
  return(anecdotes[numero])
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      votes : []
    }
  }


  ArvoUusiAnektootti = () => {
    const newValue = this.uusiRandomiNumero(anecdotes.length)
    this.setState({selected : newValue})
  }

  uusiRandomiNumero = (maksimi) => {
    return(Math.floor(Math.random() * Math.floor(maksimi)))
  }
  
  NaytaPisteet = ({valittuIndex}) => 
  {
    var currentPoints = this.state.votes[valittuIndex]
    if(currentPoints < 2 ){
      return(<p>has {currentPoints} vote</p>)
    }
    if(isNaN(currentPoints)){
      return(<p>has 0 vote</p>)
    }
    return(<p>has {currentPoints} votes</p>)    
  }

  PainoNappi = ({handleClick, text}) => (
    <button onClick = {handleClick} >{text}</button>
  )

  LisaaAani = () => {
    let change = {...this.state.votes}
    if(isNaN(change[this.state.selected])){
      change[this.state.selected] = 1
    }
    else{
      change[this.state.selected] = change[this.state.selected] + 1
    }
    
    this.setState({votes : change})
  }

  EnitenAania = () => {
    let enitenAania = 0
    let maxAanet = 0
    let items = this.state["votes"]
    
    Object.keys(items).forEach((key) => {
      if(items[key] > maxAanet){
        enitenAania = key
        maxAanet = items[key]
      }
    })   
    return enitenAania    
  }

  render() {
    return (
      <div>
        <NaytaAnekdootti numero = {this.state.selected} />

        <div>
          <this.NaytaPisteet valittuIndex = {this.state.selected} />
          <this.PainoNappi handleClick = {this.LisaaAani} text = "vote"/>
          <this.PainoNappi handleClick = {this.ArvoUusiAnektootti} text = "next anecdote"/>

          <Otsikko teksti = "anecdote with most votes:"/>
          
          <NaytaAnekdootti numero = {this.EnitenAania()} />
          <this.NaytaPisteet valittuIndex = {this.EnitenAania()} />

        </div>
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)