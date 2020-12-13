import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('Enter name')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  
  const addName = (event) => {
    let newPerson = {name: newName}
    if(persons.some(e => e.name === newName)){
      event.preventDefault()
      window.alert(`${newName} is already added to phonebook`)
    }
    else{
      event.preventDefault()
      setPersons(persons.concat(
      newPerson
      ))
      setNewName('')
    }
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map((person) => 
        <div key={person.name}>{person.name}</div>
        )
      }
    </div>
  )
}

export default App