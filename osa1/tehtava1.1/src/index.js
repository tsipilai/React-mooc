import React from 'react';
import ReactDOM from 'react-dom';

const Otsikko = (props) => {
    return(
        <h1>{props.header}</h1>
    )
}

const Sisalto = (props) => {
    return(
        <div>
            <p>{props.name1} {props.count1}</p>
            <p>{props.name2} {props.count2}</p>
            <p>{props.name3} {props.count3}</p>
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

    return(
        <div>
            <Otsikko header ={kurssi} />

            <Sisalto name1 ={osa1} count1 = {tehtavia1} 
                     name2 ={osa2} count2 = {tehtavia2} 
                     name3 ={osa3} count3 = {tehtavia3} />

            <Yhteensa count = {tehtaviaYhteensa} />
        
        </div>
    )
}


ReactDOM.render(
    <App />, 
    document.getElementById('root')
);
