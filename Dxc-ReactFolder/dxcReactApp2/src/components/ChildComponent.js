import React from 'react'

/**
 * this is a stateless component
 * @returns 
 */

function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.shaguftaHandler('Shayi')}>greet parent</button>
        </div>
    )
}

export default ChildComponent
