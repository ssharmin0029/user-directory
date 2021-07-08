import React from 'react';

function DataTable(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th onClick={props.sortEmployeeByLastName}>Name</th>
                    <th>State</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
    
            <tbody>
                {props.employeesTable.map( employee => (
                    <tr className="table" key={ employee.login.uuid }>
                        <td>
                            <img 
                                src={ employee.picture.medium } alt=""
                            />
                        </td>
                        <td>
                            { `${employee.name.first} ${employee.name.last}` }
                        </td>
                        <td>
                            {employee.location.state}
                        </td>
                        <td className="email">
                            {employee.email}
                        </td>
                        <td>
                            { employee.cell}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default DataTable;