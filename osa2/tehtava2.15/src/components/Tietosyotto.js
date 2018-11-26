import React from 'react'

const Tietosyotto = (props) => {
    return(
        <div>
            {props.text} 
            <input name={props.name}
                   value ={props.value} 
                   onChange={props.handleChange}/>
        </div>
    )
}

export default Tietosyotto

