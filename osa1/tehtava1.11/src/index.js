import React from 'react';
import ReactDOM from 'react-dom';

const Otsikko = ({text}) => <h1>{text}</h1> 

const Button = ({handleClick, text}) => 
  <button onClick={handleClick}>{text}</button>

const Statistic = ({stateNimi, arvo, yksikko}) => {
  return(
    <tr>
      <td>{stateNimi}</td>
      <td>{arvo} {yksikko}</td>
    </tr>
  )
}
const Statistics = (props) => {
  if(props.value1 > 0 || props.value2 > 0 || props.value3 > 0 || props.value4 > 0 || props.value5 > 0){
    return(
      <table>
        <tbody>
          <Statistic stateNimi ={props.name1} arvo ={props.value1} yksikko ={props.yksikko1}/>
          <Statistic stateNimi ={props.name2} arvo ={props.value2} yksikko ={props.yksikko2}/>
          <Statistic stateNimi ={props.name3} arvo ={props.value3} yksikko ={props.yksikko3}/>     
          <Statistic stateNimi ={props.name4} arvo ={props.value4} yksikko ={props.yksikko4}/>     
          <Statistic stateNimi ={props.name5} arvo ={props.value5} yksikko ={props.yksikko5} />  
        </tbody>
      </table>
    )
  }

  return(
    <p>ei yhtään palautetta annettu</p>
  )  
}

class App extends React.Component {
    constructor() {
      super()
      this.state = {
        hyva:0,
        neutraali:0,
        huono: 0
      }
    }

    laskeKeskiarvo = () => {
      const kokonaisMaara = this.state.hyva + this.state.neutraali + this.state.huono
      const keskiarvo = (Math.round((this.state.hyva - this.state.huono) / kokonaisMaara * 10) / 10)

      if(isNaN(keskiarvo)){
        return 0
      }
      return keskiarvo
    }

    laskePositiiviset = () => {
      const kokonaisMaara = this.state.hyva + this.state.neutraali + this.state.huono
      const positiivisia = (Math.round(this.state.hyva / kokonaisMaara * 1000) / 10)
      
      if(isNaN(positiivisia)){
        return 0
      }
      return positiivisia
    }

    klikButton = (stateName, newValue) => {
      return () => {
        let change = {}
        change[stateName] = newValue
        this.setState(change)
      }
    }

    render() {  
      const keskiarvo = this.laskeKeskiarvo()
      const positiivisia = this.laskePositiiviset()

      return (
        <div>
          <Otsikko text = "anna palautetta"/>

          <div>
            <Button handleClick ={this.klikButton("hyva", (this.state.hyva + 1))} text = "hyvä"/>
            <Button handleClick ={this.klikButton("neutraali", (this.state.neutraali + 1))} text = "neutraali"/>
            <Button handleClick ={this.klikButton("huono", (this.state.huono + 1))} text = "huono"/>            
          </div>
          
          <Otsikko text = "statistiikka" />

          <Statistics 
            name1 = "hyvä" value1 = {this.state.hyva} yksikko1 = ""
            name2 = "neutraali" value2 = {this.state.neutraali} yksikko2 = ""
            name3 = "huono" value3 = {this.state.huono} yksikko3 = ""
            name4 = "keskiarvo" value4 = {keskiarvo} yksikko4 = ""
            name5 = "positiivisia" value5 = {positiivisia} yksikko5 = "%" 
          />       
        </div>
      )
    }
  }

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
