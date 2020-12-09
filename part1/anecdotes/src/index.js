import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0,0,0,0,0,0])
  
  const handleClick = () =>{
    const randomNumber = Math.floor(Math.random() * 6)

    setSelected(randomNumber)
  }
  const vote = () => {
    const votes = [...points]
    votes[selected] += 1 
    setPoints(votes)
  }
  const maxVoteIndex = () => {
    let max = points[0]
    let maxIndex = 0
    
    for (let i = 1; i < points.length; i++) {
      if (points[i] > max) {
          maxIndex = i;
          max = points[i];
      }
    }
    return (maxIndex)
  }

  return (
    <div>
      <h3>Anecdote of the day</h3>
      {props.anecdotes[selected]}
      <br/>
      has {points[selected]} votes
      <br/>
      <button onClick={vote}>
        vote
      </button>
      <button onClick={handleClick}>
        next anecdote
      </button>
      <h3>Anecdote with most votes</h3>
      {props.anecdotes[maxVoteIndex()]}
      <br/>
      has {points[maxVoteIndex()]} votes
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)