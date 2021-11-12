import React, { Component } from 'react';

class ListStudentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             students: []
        }
    }
    
    render() {
        return (
            <div>
                <h2 className = "text-center">Students List</h2>
                <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>Student First Name</th>
                                <th>Student Last Name</th>
                                <th>Student Email Id</th>
                                <th>Actions</th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                this.state.students.map(
                                    student =>
                                    <tr key = {student.id}>
                                        <td> {student.firstName}</td>
                                        <td> {student.lastname}</td>
                                        <td> {student.emailId}</td>
                                    </tr>    
                                )

                            }

                        </tbody>
                    </table>
                </div>


            </div>
        );
    }
}

export default ListStudentComponent;