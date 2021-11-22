import React, { useState } from 'react'

function HooksCounter3() {
    const [name, setName]/*destructuring*/ = useState({ firstName: '', lastName: '' })
    //create a form such that
    return (
        //useState doesnt merge the prev state with the present state of object 

        /*  <form>
            <input type = 'text'
            value = {name.firstName}
            onChange = {e => setName({firstName: e.target.value}) }
            />
            <input type = 'text'
            value = {name.lastName}
            onChange = {e => setName({lastName: e.target.value}) }
            />
            <h2>Your first name is -- {name.firstName}</h2>
            <h2>Your last name is -- {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
         </form> */
        // so we need to manually merge the prev state with the present state by using SpreadOperator(...)
        <form>
            <input type='text'
                value={name.firstName}
                onChange={e => setName({...name,firstName: e.target.value })}//SpreadOperator(...)
            />
            <input type='text'
                value={name.lastName}
                onChange={e => setName({...name,lastName: e.target.value })}//SpreadOperator(...)
            />
            <h2>Your first name is -- {name.firstName}</h2>
            <h2>Your last name is -- {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </form>
    )
}

export default HooksCounter3
