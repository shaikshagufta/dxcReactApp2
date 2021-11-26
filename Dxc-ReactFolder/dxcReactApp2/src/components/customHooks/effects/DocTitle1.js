import React, {useState,useEffect} from 'react'

function DocTitle1() {
    const [count,setCount] = useState(0)
//life before custom hooks
    useEffect(
        ()=> {
            document.title = `Count ${count}`
        },
        [count]//dependency
    )

    return (
        <div>
            <button
            onClick = {()=> setCount(count+1)}
            >Count {count}</button>
        </div>
    )
}

export default DocTitle1