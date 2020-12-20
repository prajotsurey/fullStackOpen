import React from 'react'

const Display = ({persons, deletePerson}) => {
    return(
        <div>
            <h2>Numbers</h2>
            {
                persons.map((person) => 
                <div key={person.name}>{person.name} {person.number}
                <button onClick={() => {deletePerson(person.id)}}>delete</button>
                </div>
                )
            }
        </div>
    )
}

export default Display