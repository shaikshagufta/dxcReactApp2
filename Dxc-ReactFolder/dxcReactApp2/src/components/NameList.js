import React from 'react'

function NameList() {
    /*     const names = ['Shaggu', 'Shayi', 'Sony', 'Moin', 'React']
        const nameList = names.map(name => <h2>{name}</h2>) */
    const persons = [
        {
            id: 1,
            name: 'Shagufta',
            age: 21,
            skill: 'react'
        },
        {
            id: 2,
            name: 'Shayasta',
            age: 21,
            skill: 'MuleSoft'
        },
        {
            id: 3,
            name: 'Monisha',
            age: 20,
            skill: 'Java'
        },
        {
            id: 4,
            name: 'Moinuddin',
            age: 24,
            skill: 'Spring'
        }
    ]
    const personList = persons.map(person => <h2>I am {person.name}, I am {person.age} years old and I am skilled in {person.skill}</h2>)
    return (
        <div>{personList}</div>
    )
}

export default NameList
