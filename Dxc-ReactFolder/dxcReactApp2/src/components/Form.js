import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments: ''
        }
    }
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
//this just creates just an empty text box with a lable- username
    }
    render() {
        return (
            <form>
                <div>
                    <label>username</label>
                    <input type='text' value={this.state.username} onChange = {this.handleUsernameChange} />
                </div>

            </form>
        )
    }
}

export default Form
