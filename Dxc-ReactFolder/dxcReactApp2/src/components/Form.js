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
    }
    //for app to react to the text we added a handler for username &
    //added another div for commets too with a label but the text is not hadled yet
    render() {
        return (
            <form>
                <div>
                    <label>username</label>
                    <input type='text' value={this.state.username} onChange={this.handleUsernameChange} />
                </div>
                <div>
                    <label>comments</label>
                    <textarea value={this.state.comments}></textarea>
                </div>

            </form>
        )
    }
}

export default Form
