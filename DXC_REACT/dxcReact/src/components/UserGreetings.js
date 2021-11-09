import React, { Component } from 'react'

export class UserGreetings extends Component {
    constructor(props) {
        super(props)

        this.state = {
            IsLoggedIn: false
        }
    }
    // using short circuit operator operator for conditional rendering  
    render() {
        return this.state.IsLoggedIn && <div>welcome ansari</div>
        /*  return(
             this.state.IsLoggedIn ?
                 <div>welcome Guest</div> :
                 <div>welcome Shaggu</div>
         ) */

        /*  let message 
         if (this.state.IsLoggedIn) {
             message = <div>welcome Shaggu</div>
         }
         else {
             message = <div>welcome Guest</div>
         }
         return <div>{message}</div>*/
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
