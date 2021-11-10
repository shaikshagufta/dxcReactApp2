import React from 'react'

const heading = {
    fontSize: '74px',
    color: 'blue',
    textDecoration: 'underline'
}

function Inline() {
    return (
        <div>

            <h1 className='error'> Inline Error</h1>{/*error style is locally scoped no need to import */}
            <h1 style={heading}>inline Heading</h1>

        </div>
    )
}

export default Inline
