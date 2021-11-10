import React from 'react'

/*function Greet() {
    return <h1>welcome Shagufta</h1>
}*/
//const Greet = () => <h1>hello dxc</h1>
//const Greet = (props) => {
const Greet = props => {
    const { name, college } = props
    // console.log(props);
    //props.name = 'dxc'
    return (
        <div>
            <h1> hello  {name} you are from {college}</h1>
        </div>
    )

}
export default Greet
