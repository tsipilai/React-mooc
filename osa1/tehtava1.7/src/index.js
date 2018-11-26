import React from 'react';
import ReactDOM from 'react-dom';

const Otsikko = ({text}) => <h1>{text}</h1> 

const Button = ({handleClick, text}) => 
  <button onClick={handleClick}>{text}</button>

const Statistic = ({stateNimi, arvo, yksikko}) =>
  <p>{stateNimi} {arvo} {yksikko}</p>

//const Statistics = 

class App extends React.Component {
    constructor() {
      super()
      this.state = {
        hyva:0,
        neutraali:0,
        huono: 0
      }
    }

    klikHyva = () => {
      this.setState({
        hyva: this.state.hyva + 1 
      })
    }
    klikNeutraali = () => {
      this.setState({
        neutraali: this.state.neutraali + 1 
      })
    }
    klikHuono = () => {
      this.setState({
        huono: this.state.huono + 1 
      })
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

    render() {  
      const keskiarvo = this.laskeKeskiarvo()
      const positiivisia = this.laskePositiiviset()

      return (
        <div>
          <Otsikko text = "anna palautetta"/>

          <div>
            <Button handleClick ={this.klikHyva} text = "hyvä"/>
            <Button handleClick ={this.klikNeutraali} text = "neutraali"/>
            <Button handleClick ={this.klikHuono} text = "huono"/>            
          </div>
          
          <Otsikko text = "statistiikka" />
          
          <div>
            <Statistic stateNimi ="hyvä" arvo ={this.state.hyva} />
            <Statistic stateNimi ="neutraali" arvo ={this.state.neutraali} />
            <Statistic stateNimi ="huono" arvo ={this.state.huono} />     
            <Statistic stateNimi ="keskiarvo" arvo ={keskiarvo} />     
            <Statistic stateNimi ="positiivisia" arvo ={positiivisia} yksikko ="%" />     
          </div>
        </div>
      )
    }
  }

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
