import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return(
    <button onClick = {props.handleClick}>
    {props.text}
    </button>
  )
}

const Display = ({reviews}) => {
  return(
  <div>
    good {reviews.good}
    <br />
    bad {reviews.bad}
    <br />
    neutral {reviews.neutral}
  </div>
  )
}

const All = ({reviews}) => {
  return(
    <div>all {reviews.good + reviews.neutral + reviews.bad} </div>
  )
}
const Average = ({reviews}) => {
  const total = reviews.good + reviews.neutral + reviews.bad
  const score = reviews.good - reviews.bad
  let average = 0
  if(total === 0){
    average = 0
  }
  else{
    average = score / total
  }
  return(
    <div>average {average} </div>
  )
}
const Percentage = ({reviews}) => {
  const total = reviews.good + reviews.neutral + reviews.bad
  let percentage = 0
  if(total === 0){
    percentage = 0
  }
  else{
    percentage = (reviews.good *100)/ total
  }
  return(
    <div>positive {percentage} % </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [reviews, setReviews] = useState(
    {good:0, neutral:0, bad:0}
  )
  console.log(reviews)
  const goodReview = () => {
    setReviews({ ...reviews, good: reviews.good + 1})
  }
  
  const badReview  = () => {
    setReviews({ ...reviews, bad: reviews.bad + 1})
  }

  const neutralReview = () => {
    setReviews({ ...reviews, neutral: reviews.neutral + 1})
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
      <Display reviews={reviews}/>
      <All reviews={reviews}/>
      <Average reviews={reviews}/>
      <Percentage reviews={reviews}/>
      </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)