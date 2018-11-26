import React from 'react';
import ReactDOM from 'react-dom';

const Otsikko = (props) => {
    return(
        <h1>{props.header}</h1>
    )
}

const Osa = (props) => {
    return(        
        <p>{props.name} {props.count}</p>
    )
}

const Sisalto = (props) => {
    return(
        <div>
            <Osa name = {props.Osa1.nimi} count = {props.Osa1.tehtavia} />
            <Osa name = {props.Osa2.nimi} count = {props.Osa2.tehtavia} />
            <Osa name = {props.Osa3.nimi} count = {props.Osa3.tehtavia} />            
        </div>
    )
}

const Yhteensa = (props) => {
    return(
        <p>yhteensä {props.count} tehtävää</p> 
    )
}


const App = () => {
    const kurssi = "Half Stack -sovelluskehitys"
    const osa1 = {
        nimi: "Reactin perusteet",
        tehtavia: 10
    }
    const osa2 = {
        nimi: "Tiedonvälitys propseilla",
        tehtavia: 7
    }
    const osa3 = {
        nimi: "Komponenttien tila",
        tehtavia: 14
    }

    return(
        <div>
            <Otsikko header ={kurssi} />

            <Sisalto Osa1 = {osa1} Osa2 = {osa2} Osa3 = {osa3} /> 

            <Yhteensa count = {osa1.tehtavia + osa2.tehtavia + osa3.tehtavia} />
        
        </div>
    )
}


ReactDOM.render(
    <App />, 
    document.getElementById('root')
);
