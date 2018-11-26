import React from 'react'

const ShowCountryInfo = (props) => {
    if(props.countryList.length >10){
        return(
            <div>
                too many maches, specify another filter
            </div>
        )
    }
    else if(props.countryList.length === 1){
        const country = props.countryList[0]
        return(
            <div>
                <h2>{country.name}</h2>
                <p>capital: {country.capital}</p>
                <p>population: {country.population}</p>
                <img src={country.flag} alt="country flag error" width='200'/>
            </div>
        )
    }
    return(
        <div>
            {props.countryList.map(country => <div key={country.name} id={country.name} onClick={props.handleCountryClick}>{country.name}</div>)}
        </div>
    )
}

export default ShowCountryInfo