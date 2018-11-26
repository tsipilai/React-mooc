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
            <Osa name = {props.osat[0].nimi} count = {props.osat[0].tehtavia} />
            <Osa name = {props.osat[1].nimi} count = {props.osat[1].tehtavia} />
            <Osa name = {props.osat[2].nimi} count = {props.osat[2].tehtavia} />            
        </div>
    )
}

const Yhteensa = (props) => {
    return(
        <p>yhteensä {props.osat[0].tehtavia + props.osat[1].tehtavia + props.osat[2].tehtavia} tehtävää</p> 
    )
}


const App = () => {
    const kurssi = {
        nimi: "Half Stack -sovelluskehitys",
        osat: [
            {
                nimi: "Reactin perusteet",
                tehtavia: 10
            },
            {
                nimi: "Tiedonvälitys propseilla",
                tehtavia: 7
            },
            {
                nimi: "Komponenttien tila",
                tehtavia: 14
            }
        ]
    }
    return(
        <div>
            <Otsikko header ={kurssi.nimi} />

            <Sisalto osat = {kurssi.osat} /> 

            <Yhteensa osat = {kurssi.osat} />
        
        </div>
    )
}


ReactDOM.render(
    <App />, 
    document.getElementById('root')
);
