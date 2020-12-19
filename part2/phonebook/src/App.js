import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import Form from './components/Form'
import Display from './components/Display'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('Enter name')
  const [ newNumber, setNewNumber ] = useState('Enter number')
  const [ filter, setFilter ] = useState('')


  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  },[])
  const personsToShow = persons.filter(person=>person.name.toUpperCase().search(filter.toUpperCase()) !== -1)
  
  const handleFilterChange= (event) => {
    setFilter(event.target.value)
  }

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
      <Search filter={filter} handleFilterChange={handleFilterChange}/>
      <h2>Add a new entry</h2>
      <Form addPerson={addPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <Display persons = {personsToShow}/>
    </div>
  )
}

export default App