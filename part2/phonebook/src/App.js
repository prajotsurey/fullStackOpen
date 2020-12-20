import React, { useState, useEffect } from 'react'
import Search from './components/Search'
import Form from './components/Form'
import Display from './components/Display'
import personService from './services/phonebook.js'
const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('Enter name')
  const [ newNumber, setNewNumber ] = useState('Enter number')
  const [ filter, setFilter ] = useState('')


  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
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

      const newPerson = {
        name:newName,
        number:newNumber,
        date: new Date()
      }
      personService
        .create(newPerson)   
        .then(returnedPerson => {       
          setPersons(persons.concat(returnedPerson))
        })
      setNewName('')
      setNewNumber ('')
    }
  }
  
  const deletePerson = (id) => {
    let personToDelete = persons.filter(person => person.id === id)
    if (window.confirm("Delete " + personToDelete[0].name + " ?")) {
      personService
      .deleteObject(id)
      .then( ()=>{
        setPersons(persons.filter(person => person.id !== id))
      })
    }
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Search filter={filter} handleFilterChange={handleFilterChange}/>
      <h2>Add a new entry</h2>
      <Form addPerson={addPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <Display persons = {personsToShow} deletePerson={deletePerson}/>
    </div>
  )
}

export default App