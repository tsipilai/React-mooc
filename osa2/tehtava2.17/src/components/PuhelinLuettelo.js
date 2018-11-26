import React from 'react'

const ShowPerson = (props) => {
    return(
      <tr>
          <td>{props.name}</td>
          <td>{props.number}</td>
          <td><button id={props.id} onClick={props.deleteContact}>poista</button></td>
      </tr>
    )
}

const Puhelinluettelo = (props) => {
    return(
        <table>
            <tbody>
                {props.list.map(person => <ShowPerson key = {person.name} id = {person.id} name ={person.name} number = {person.number} deleteContact={props.deleteContact} />)}
            </tbody>     
        </table>
    )
}

export default Puhelinluettelo