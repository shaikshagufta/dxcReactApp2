import React from 'react'
import './myStyles.css'

function StyleSheet(props) {
    let className = props.enabled ? 'primary' : ''
    return (
        <div>
            <h1 className={className}> Welcome to Style Sheets </h1>
        </div>
    )
}

export default StyleSheet