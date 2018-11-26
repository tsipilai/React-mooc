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
            <Osa name = {props.kaikkiOsat[0]} count = {props.kaikkiTehtavat[0]} />
            <Osa name = {props.kaikkiOsat[1]} count = {props.kaikkiTehtavat[1]} />
            <Osa name = {props.kaikkiOsat[2]} count = {props.kaikkiTehtavat[2]} />            
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
    const osa1 = "Reactin perusteet"
    const tehtavia1 = 10
    const osa2 = "Tiedonvälitys propseilla"
    const tehtavia2 = 7
    const osa3 = "Komponenttien tila"
    const tehtavia3 = 14
    const tehtaviaYhteensa = tehtavia1 + tehtavia2 + tehtavia3

    const osat = [osa1, osa2, osa3]
    const tehtavat = [tehtavia1, tehtavia2, tehtavia3]


    return(
        <div>
            <Otsikko header ={kurssi} />

            <Sisalto kaikkiOsat = {osat} kaikkiTehtavat = {tehtavat} /> 

            <Yhteensa count = {tehtaviaYhteensa} />
        
        </div>
    )
}


ReactDOM.render(
    <App />, 
    document.getElementById('root')
);
