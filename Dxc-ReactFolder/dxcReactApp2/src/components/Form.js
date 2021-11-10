import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments: ''
        }
    }
    /*handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }*/
//for app to react to the text we added a handler
    render() {
        return (
            <form>
                <div>
                    <label>username</label>
                    <input type='text' />
                </div>

            </form>
        )
    }
}

export default Form
