import React from 'react'

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

export default Kurssi