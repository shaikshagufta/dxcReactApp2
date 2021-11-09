import React, { Component } from 'react'

export class NameList extends Component {
    render() {
        const names = ['shaggu', 'shayi', 'dxc', 'jenny', 'vandy']
        //we can avoid those many lines of code by using map()
        return (
            <div>

                {names.map(name => <h2>{name}</h2>)}

            </div>
        )
    }
}

export default NameList
