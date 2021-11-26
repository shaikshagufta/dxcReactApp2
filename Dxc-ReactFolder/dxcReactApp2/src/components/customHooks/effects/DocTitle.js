import React, {useState} from 'react'
import useDocTitle from '../UseDocTitle'

function DocTitle() {
    const [count,setCount] = useState(0)
//life with custom hooks
    useDocTitle(count)

    return (
        <div>
            <button
            onClick = {()=> setCount(count+1)}
            >Count {count}</button>
        </div>
    )
}

export default DocTitle