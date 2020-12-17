import React from 'react'

const Form = ({addPerson, newName, newNumber, handleNameChange, handleNumberChange}) => {
    
    return(
        <form onSubmit={addPerson}>
            <div>
                name: <input value={newName} onChange={handleNameChange}/>
            </div>
            <div>
                number: <input value={newNumber} onChange={handleNumberChange}/>
            </div>
            <button type="submit">add</button>
        </form>
    )
}

export default Form