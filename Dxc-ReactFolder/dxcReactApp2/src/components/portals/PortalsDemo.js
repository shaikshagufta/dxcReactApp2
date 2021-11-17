import React from 'react'
import ReactDOM from 'react-dom'
/**
 * 
 * @returns 
 */

function PortalsDemo() {
    return ReactDOM.createPortal(
        <h1>portal demo</h1>,
        document.getElementById('portal-root')
    )
}

export default PortalsDemo
