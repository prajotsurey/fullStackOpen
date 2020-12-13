import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { 
      name: 'Arto Hellas',
      number:'1234567899'
    }
  ]) 
  const [ newName, setNewName ] = useState('Enter name')
  const [ newNumber, setNewNumber ] = useState('Enter number')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    if(persons.some(e => e.name === newName)){
      window.alert(`${newName} is already added to phonebook`)
    }
    else if(persons.some(e => e.number === newNumber)){
      window.alert(`${newNumber} is already added to phonebook`)
    }
    else{
      setPersons(persons.concat(
      {
        name:newName,
        number:newNumber
      }
      ))
      setNewName('')
      setNewNumber ('')
    }
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map((person) => 
        <div key={person.name}>{person.name} {person.number}</div>
        )
      }
    </div>
  )
}

export default App