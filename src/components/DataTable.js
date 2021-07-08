import React from 'react';

function DataTable(props) {
    return (
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col"></th>
                    <th scope="col" onClick={ props.sortEmployeeByLastName }>Name</th>
                    <th scope="col">State</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                </tr>
            </thead>
    
            <tbody>
                {props.employeesTable.map( employee => (
                    <tr key={ employee.login.uuid } >
                        <td>
                            <img alt={ employee.name.first } className="img-fluid" src={ employee.picture.thumbnail } style={{ margin: "0 auto"}} />
                        </td>
                        <td>
                            { `${ employee.name.first } ${ employee.name.last }` }
                        </td>
                        <td>
                            { employee.location.state }
                        </td>
                        <td>
                            { employee.email }
                        </td>
                        <td>
                            { employee.cell }
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default DataTable;