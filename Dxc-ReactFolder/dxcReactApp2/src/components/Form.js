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

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault() //conents will not be refreshed/vanish
    }
    /* 1.for app to react to the text we added a handler for username &
    2.added handler to the comment box too
    3.added topics div & handler is added so we are now able to select
    4.adding a submit button but evry time we hit it the data vanishes as default method
    5.to avoid this we add the preventDefault method is added 
    6.in form tag we decide which method should be called when submit is clicked*/
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
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
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value="react" >React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>

                    </select>
                </div>
                <button type="submit" >Submit</button>
            </form>
        )
    }
}

export default Form