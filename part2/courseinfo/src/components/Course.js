import React from 'react';

const Header = ({ name }) => {
  return (
    <h2>{name}</h2>
  )
}

const Total = ({ parts }) => {
  let sum = parts.reduce((s,p) => s+p.exercises,0)

  return(
    <b>total of {sum} exercises</b>
  ) 
}

const Part = ({part}) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>    
  )
}

const Content = ({parts}) => {
  return (
    <div>
      {
        parts.map((part) => 
        <Part key = {part.id} part = {part} />
        )}
    </div>
  )
}

const Course = ({course}) =>{
  return(
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course