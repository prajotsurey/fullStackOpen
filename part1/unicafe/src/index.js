import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return(
    <button onClick = {props.handleClick}>
    {props.text}
    </button>
  )
}

const Statistics = (props) => {
  const total = props.good+props.bad+props.neutral
  let score = props.good - props.bad
  let average = score/total
  let positive = (props.good * 100)/total + ' %'
  if(total === 0){
    return(
      <div>
        <h2>statistics</h2>
        No feedback given
      </div>
    )
  }
  else{
    return(
    <div>
      <h2>statistics</h2>
      <table>
        <Statistic text="good" value={props.good}/>
        <Statistic text="neutral" value={props.neutral}/>
        <Statistic text="bad" value={props.bad}/>
        <Statistic text="total" value={total}/>
        <Statistic text="average" value={average}/>
        <Statistic text="positive" value={positive}/>
      </table>
    </div>
    )
  }
}
const Statistic = ( {text,value} ) => {
  return(
    <tr>
      <td>{text}</td> 
      <td>{value}</td>
    </tr>
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
        <Button handleClick={neutralReview} text='neutral'/>
        <Button handleClick={badReview} text='bad'/>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)