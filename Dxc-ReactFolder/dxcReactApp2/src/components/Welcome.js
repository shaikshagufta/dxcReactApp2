import React, { Component } from 'react'

export class Welcome extends Component {

    render() {
        return <h1>welcome mr {this.props.name} your alias is {this.props.alias}</h1>
    }
}

export default Welcome
