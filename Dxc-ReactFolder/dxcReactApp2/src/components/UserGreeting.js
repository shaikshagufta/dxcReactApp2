import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            IsLoggedIn: false
        }
    }

    render() {
        if (this.state.IsLoggedIn) {
            return <div>Welcome Shagufta</div>
        }
        else {
            return <div>Welcome Guest</div>
        }
        /*return (
            <div>
               <div>Wlcome Shagufta</div>
               <div>Welcome Guest</div>

            </div>
        )*/
    }
}

export default UserGreeting
