import React from 'react'

const WorkOut = ({workouts}) => {
  return (
    <div className='workout-details'>
        <h2>{workouts.title}</h2>
        <p><strong>Kg's</strong>{workouts.load}</p>
        <p><strong>Repetitions</strong>{workouts.repeat}</p>
        <span>{workouts.createdAt}</span>

    </div>
  )
}

export default WorkOut