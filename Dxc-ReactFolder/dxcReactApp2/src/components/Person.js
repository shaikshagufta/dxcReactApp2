import React from 'react'

function Person({ human }) {
    return (
        <div>
            <h2> I am {human.name}, I am {human.age} years old and i am skilled in {human.skill}</h2>
        </div>
    )
}

export default Person
