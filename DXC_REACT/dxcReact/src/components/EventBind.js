import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        console.log(this)
        this.setState({
            message: 'good bye'
        })

    }

    render() {
        //using bind im tying clickhandler to this keyword -- binding in render method
        return (
            <div>
                <div>{this.state.message}</div>
                 {/* <button onClick = {() => this.clickHandler()}>click</button>   */}
                 <button onClick={this.clickHandler}>click</button>
            </div>
        )
    }
}

export default EventBind