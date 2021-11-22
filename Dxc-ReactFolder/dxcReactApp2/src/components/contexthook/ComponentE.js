import React, { useContext } from 'react'            //importing context hook
import { BatchContext, UserContext } from '../../App'

function ComponentE() {
    const user = useContext(UserContext)           //importing the context 
    const batch = useContext(BatchContext)
    return (
        <div>
            <h1>Component E --{user} is from {batch} </h1>
        </div>
    )
}

export default ComponentE
