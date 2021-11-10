import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic: 'React'//added another property
        }
    }
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    //for app to react to the text we added a handler for username &
    //added handler to the comment box too
    //added topics div but wont be able to select the options as no handler is added
    render() {
        return (
            <form>
                <div>
                    <label>username</label>
                    <input type='text' value={this.state.username} onChange={this.handleUsernameChange} />
                </div>
                <div>
                    <label>comments</label>
                    <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
                </div>
                <div>
                    <label>topics</label>
                    <select value={this.state.topic}>
                        <option value="react" >React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>

                    </select>

                </div>

            </form>
        )
    }
}

export default Form
