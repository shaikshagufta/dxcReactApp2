import React from 'react'

const heading = {
    fontSize: '74px',
    color: 'blue',
    textDecoration: 'underline'
}

function Inline() {
    return (
        <div>
            <h1 style={heading}>Uderlined Headding</h1>
        </div>
    )
}

export default Inline
