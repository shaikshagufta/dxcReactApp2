import React from 'react'
import './myStyles.css'
// used literal instead of template and attribute is className
function StyleSheet(props) {
    let className = props.enabled ? 'primary' : ''
    return (
        <div>
            <h1 className={`${className} font-xl`}> Welcome to Style Sheets </h1>
        </div>
    )
}

export default StyleSheet