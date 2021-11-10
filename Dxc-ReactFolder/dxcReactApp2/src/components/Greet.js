import React from 'react'

/*function Greet() {
    return <h1>welcome Shagufta</h1>
}*/
//const Greet = () => <h1>hello dxc</h1>
const Greet = (props) => {
    console.log(props);
    return (
        <div>
            <h1> hello  {props.name} you are from {props.college}</h1>
            {props.children}
        </div>
    )

}
export default Greet
