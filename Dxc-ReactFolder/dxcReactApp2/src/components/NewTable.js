import React from 'react'
import Columns from './Columns'
//it shows td canot be a child of tr in the console when inspected
function NewTable() {
    return (
        <table>
            <tbody>
                <tr>
                    <Columns/>
                </tr>
            </tbody>
        </table>
    )
}

export default NewTable
