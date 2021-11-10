import React from 'react'
import Person from './Person'

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
    const personList = persons.map(person => (<Person human = {person}></Person>))
    return (
        <div>{personList}</div>
    )
}

export default NameList
