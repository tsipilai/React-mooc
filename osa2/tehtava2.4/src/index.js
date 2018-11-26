import React from 'react';
import ReactDOM from 'react-dom';

const Osa = ({osaNimi, tehtavaMaara}) => {
    return(
        <p>{osaNimi} {tehtavaMaara}</p>
    )
}

const Kurssi = ({kurssi}) => {
    return(
        <div>
            <h1>{kurssi.nimi}</h1>
            <div>
                {kurssi.osat.map(item => <Osa key={item.id} osaNimi={item.nimi} tehtavaMaara={item.tehtavia}/> )} 
            </div>
            <Yhteenlaskettu kurssi ={kurssi} />
        </div>
    )
}

const Yhteenlaskettu = ({kurssi}) => {
    let yhteensa = kurssi.osat.reduce((accumulator, kurssi) => {
        return accumulator += kurssi.tehtavia
    }, 0)
    
    return(
        <p>yhteensä {yhteensa} tehtävää</p>
    )
}

const App = () => {
    const kurssit = [
        {
        nimi: 'Half Stack -sovelluskehitys',
        id: 1,
        osat: [
            {
                nimi: 'Reactin perusteet',
                tehtavia: 10,
                id: 1
            },
            {
                nimi: 'Tiedonvälitys propseilla',
                tehtavia: 7,
                id: 2
            },
            {
                nimi: 'Komponenttien tila',
                tehtavia: 14,
                id: 3
            },
            {
                nimi: 'Lisätty osio',
                tehtavia: 12,
                id: 4
            },
            {
                nimi: 'Lisätty osio2 ja joku React',
                tehtavia: 4,
                id: 5
            }
            ]
        },
        {
            nimi: 'Node.js',
            id: 2,
            osat: [
                {
                    nimi: 'Routing',
                    tehtavia: 3,
                    id: 1
                },
                {
                    nimi: 'Middlewaret',
                    tehtavia: 7,
                    id: 2
                }
            ]
        }
    ]

    return (
      <div>
        {kurssit.map(kurssi => <Kurssi key={kurssi.id} kurssi={kurssi} />)}
      </div>
    )
  }


ReactDOM.render(
    <App />, 
    document.getElementById('root')
);
