import React from 'react';
import ReactDOM from 'react-dom';

const Otsikko = ({text}) => <h1>{text}</h1> 

const Button = ({handleClick, text}) => 
  <button onClick={handleClick}>{text}</button>

const StateArvo = ({stateNimi, arvo}) =>
  <p>{stateNimi} {arvo}</p>

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

    render() {      
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
            <StateArvo stateNimi ="hyvä" arvo ={this.state.hyva} />
            <StateArvo stateNimi ="neutraali" arvo ={this.state.neutraali} />
            <StateArvo stateNimi ="huono" arvo ={this.state.huono} />            
          </div>
        </div>
      )
    }
  }

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
