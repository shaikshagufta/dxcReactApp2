import React, { Component } from 'react'

export class RegularComp extends Component {
    render() {
        console.log('--REGULAR component--')//adding log to check the render method
        return (
            <div>
                REGULAR Component {this.props.name}
            </div>
        )
    }
}

export default RegularComp
