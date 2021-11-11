import React, { Component } from 'react'
import PureComp from './PureComp';
import RegularComp from './RegularComp';

class ParentComp extends Component {
    //adding a state property  
    constructor(props) {
        super(props)

        this.state = {
            name: 'Shagufta-Parent Component'
        }
    }
    //adding a timer 
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Shagufta-Parent Component'
            })

        }, 2000);
    }
    //adding log to check the render method  
    render() {
        console.log('******************* parent component************************')
        return (
            <div>
                Parent Component
                <RegularComp name={this.state.name}></RegularComp>
                <PureComp name={this.state.name}></PureComp>
            </div>
        )
    }
}

export default ParentComp
