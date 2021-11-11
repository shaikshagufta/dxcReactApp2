import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    render() {
      console.log('--PURE component--') //adding log to check the render method 
        return (
            <div>
                Pure component {this.props.name}
            </div>
        )
    }
}

export default PureComp
