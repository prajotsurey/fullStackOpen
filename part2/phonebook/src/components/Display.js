import React from 'react'

const Display = ({persons}) => {
    return(
        <div>
            <h2>Numbers</h2>
            {
                persons.map((person) => 
                <div key={person.name}>{person.name} {person.number}</div>
                )
            }
        </div>
    )
}

export default Display