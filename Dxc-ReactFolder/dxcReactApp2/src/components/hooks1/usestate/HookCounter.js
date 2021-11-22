import React, { useState } from 'react'
//useState is a hook that allows you to add a state to stateless component [functional component]

export function HookCounter() {
    /* return (
        <div>
            <button onClick={}>Hook Count{}</button>
        </div>) 
        to this we wanted to add states with out actually adding states Using useState Hook */
    // for that we add an import of useState from 'react' and then const in function


    const [count, setCount]/*destructuring */ = useState(0)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Hook Count{count}</button>
        </div>
    )
}

export default HookCounter
