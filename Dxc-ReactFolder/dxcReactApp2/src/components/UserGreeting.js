import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            IsLoggedIn: true
        }
    }

    render() {
        return this.state.IsLoggedIn && <div>Welcome Shagufta</div>
        /*return(
            this.state.IsLoggedIn ?
            <div>Welcome Shagufta</div> :
            <div>Welcome Guest</div>
        )*/
        /*let message 
        if (this.state.IsLoggedIn) {
            message = <div>Welcome Shagufta</div>
        }
        else {
            message = <div>Welcome Guest</div>
        }
        return <div>{message}</div>*/
        /*    return <div>Welcome Shagufta</div>
        }
        else {
            return <div>Welcome Guest</div>
        }*/
        /*return (
            <div>
               <div>Wlcome Shagufta</div>
               <div>Welcome Guest</div>

            </div>
        )*/
    }
}

export default UserGreeting
