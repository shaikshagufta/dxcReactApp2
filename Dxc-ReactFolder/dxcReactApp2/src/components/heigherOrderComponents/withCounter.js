import React, { Component } from 'react'
// withcounter accepts a component, enhances it and returns an updated component
//the original component can be clickcounter or hovercounter
const UpdatedComponent = OrignalComponent => {
    class NewComponent extends Component {
        // bring the constructor in the Updated Component
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }
        // bring the functionality in the Updated Component
        incrementCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + 1 }
            })
        }

        render() {
            return (
                <OrignalComponent
                    countKey={this.state.count}
                    incrementCount={this.incrementCount}
                />
            )
        }
    }
    return NewComponent
}

export default UpdatedComponent