import React, { Component } from 'react'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody = () => {
    return (
        <tbody>
            <tr>
                <td>Shaggu</td>
                <td>Software Engineer</td>
            </tr>
            <tr>
                <td>Shayi</td>
                <td>Web Developer</td>
            </tr>
            <tr>
                <td>Jenny</td>
                <td>HR Manager</td>
            </tr>
            <tr>
                <td>Vandy</td>
                <td>Bussiness Analyst</td>
            </tr>
        </tbody>
    )
}
export class Table extends Component {
    render() {
        return (
            <div>
                <table>
                    <TableHeader />
                    <TableBody />
                </table>
            </div>
        )
    }
}

export default Table
