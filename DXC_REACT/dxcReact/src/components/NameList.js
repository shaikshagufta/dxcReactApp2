import React, { Component } from 'react'

export class NameList extends Component {
    render() {
        const names = ['shaggu','shayi','dxc','jenny']

        return (
            <div>

                <h2>{names[0]}</h2>
                <h2>{names[1]}</h2>
                <h2>{names[2]}</h2>
                <h2>{names[3]}</h2>
                
            </div>
        )
    }
}

export default NameList
