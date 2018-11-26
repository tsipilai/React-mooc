import React from 'react';
import ReactDOM from 'react-dom';
import Kurssi from'./components/Kurssi'

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
        },
        {
            nimi: 'Joku.js',
            id: 3,
            osat: [
                {
                    nimi: 'testivaan',
                    tehtavia: 22,
                    id: 1
                },
                {
                    nimi: 'testitoinen',
                    tehtavia: 8,
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
