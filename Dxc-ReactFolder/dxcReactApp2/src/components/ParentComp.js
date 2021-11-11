import React, { Component, memo } from 'react'
import MemoComp from './MemoComp';
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
                name: 'Shagufta-Parent Component-memo'
            })

        }, 2000);
    }
    //adding log to check the render method  
    render() {
        console.log('******************* parent component************************')
        return (
            <div>
                Parent Component
                <MemoComp name = {this.state.name}/>
                {/*} <RegularComp name={this.state.name}></RegularComp>
                <PureComp name={this.state.name}></PureComp> */}
            </div>
        )
    }
}

export default ParentComp
