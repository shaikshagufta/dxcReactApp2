import React from 'react'
//added fragments here to observe the console in inspect of app showing no warnings
function Columns() {
    // we should create an array od objects
    const items = [
        {
            title: 'Shagufta',
            id: 1,
            description: 'Me'
        },
        {
            title: 'Shayasta',
            id: 2,
            description: 'Twin'

        },
        {
            title: 'Sony',
            id: 3,
            description: 'Nephew'

        },
    ]
    return (
        <React.Fragment>
            {
                items.map(
                    item => (
                        <React.Fragment key={item.id}>
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                        </React.Fragment>
                    )
                )
            }
            </React.Fragment>
    )
}

export default Columns
