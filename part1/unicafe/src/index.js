import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return(
    <button onClick = {props.handleClick}>
    {props.text}
    </button>
  )
}

const Display = (props) => {
  return(
  <div>
    good {props.good}
    <br></br>
    bad {props.bad}
    <br></br>
    neutral {props.neutral}
  </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodReview = () => {
    setGood(good+1)
  }
  
  const badReview  = () => {
    setBad(bad+1)
  }

  const neutralReview = () => {
    setNeutral(neutral+1)
  }
  
  return (
    <div>
      <h2>
        give feedback
      </h2>
      <div>
        <Button handleClick={goodReview} text='good'/>
        <Button handleClick={badReview} text='bad'/>
        <Button handleClick={neutralReview} text='neutral'/>
      </div>
      <h2>statistics</h2>
      <Display good={good} bad={bad} neutral={neutral}/>
      </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)