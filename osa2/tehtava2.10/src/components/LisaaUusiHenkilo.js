import React from 'react'
import Tietosyotto from './Tietosyotto'


const LisaaUusiHenkilo = (props) => {
    return(
        <form>        
            <h2>Lisää uusi</h2>

            <Tietosyotto text = "nimi:" name = {props.newName} value = {props.nameValue} handleChange={props.handleChange} />
            <Tietosyotto text = "numero:" name = {props.newNumber} value = {props.numberValue} handleChange={props.handleChange} />
                
            <div>
                <button onClick={props.buttonClick} type="submit">lisää</button>
            </div>
        </form>
    )
}

export default LisaaUusiHenkilo