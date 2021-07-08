import React, { Component } from 'react';
import API from '../utils/API';
import Navbar from './Navbar';
import SearchForm from './SearchForm';
import DataTable from './DataTable';

class EmployeeContainer extends Component {
    state = {
        search: "",
        employees:[],
        employeesTable: [],
        order: ""
    };

    searchEmployees = () => {
        API.getUsers()
        .then( res => this.setState({
            employees: res.data.results,
            employeesTable: res.data.results
        }))
        .catch(err => console.log(err));
    };

    componentDidMount() {
        this.searchEmployees();
    }

    // Sort by last name (ascending/descending order) when clicked on the name field 
    sortEmployeeByLastName = () => {
        const {employeesTable} = this.state;

        if ( this.state.order === 'asc' ) {
            const sortLastName = employeesTable.sort( (a, b) => (a.name.last > b.name.last) ? 1: -1);
            console.log(sortLastName);
            
            this.setState({
                employeesTable: sortLastName,
                order:'desc'
            });
        }
        else {
            const sortLastName = employeesTable.sort( (a, b) => (a.name.last > b.name.last) ? -1 : 1);
            console.log(sortLastName);
            
            this.setState({
                employeesTable: sortLastName,
                order: 'asc'
            });
        }
    }
    
    // Filter employees when searched by state
    filterEmployees() {
        const {employees, search} = this.state;
        const filterEmployeesByState = employees.filter( employee => {
            return employee.location.state.toLowerCase().includes( search.toLowerCase() );
        });
        return filterEmployeesByState;
    }

    handleInputChange = e => {
       const {name, value} = e.target;
       this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault();
        const filteredByState = this.filterEmployees();

        this.setState({
             employeesTable: filteredByState
        });
    }

    render() {
        return (
            <div className="container">
                <Navbar />
                <div className="row">
                    <div className="col-6 col-md-6 col-sm-6">
                        <SearchForm
                        value={this.state.search}
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                        />
                    </div>
                    <div className="col-12">
                {/* <h1>{this.state.order}</h1> */}
                    <DataTable
                    employeesTable={this.state.employeesTable}
                    sortEmployeeByLastName={this.sortEmployeeByLastName}
                    />
                    </div>
                </div>
            </div>
        );
    }

}

export default EmployeeContainer;