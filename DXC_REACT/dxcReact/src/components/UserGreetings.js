import React, { Component } from 'react'

export class UserGreetings extends Component {
    constructor(props) {
        super(props)

        this.state = {
            IsLoggedIn: true
        }
    }
    // using variable message for conditional rendering  
    render() {
        let message
        if (this.state.IsLoggedIn) {
            message = <div>welcome Shaggu</div>
        }
        else {
            message = <div>welcome Guest</div>
        }
        return <div>{message}</div>
        /*  if(this.state.isLoggedIn){
         return (
             <div>
               <div>Welcome Shaggu</div>
               <div>Welcome Shayi</div>
             </div>
         )*/
    }
}

export default UserGreetings
