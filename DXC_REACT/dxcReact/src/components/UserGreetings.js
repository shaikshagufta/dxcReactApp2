import React, { Component } from 'react'

export class UserGreetings extends Component {
    constructor(props) {
        super(props)

        this.state = {
            IsLoggedIn: true
        }
    }
    //if-else way of conditional rendering   
    render() {
        if (this.state.IsLoggedIn) {
            return <div>welcome Shaggu</div>
        }
        else {
            return <div>welcome Guest</div>
        }
        /*return (
            <div>
              <div>Welcome Shaggu</div>
              <div>Welcome Shayi</div>
            </div>
        )*/
    }
}

export default UserGreetings
