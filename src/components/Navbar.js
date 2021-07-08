import React from 'react';

function Navbar() {
    return (
    <div class="jumbotron jumbotron-fluid bg-light">
        <div className="container">
            <h1 className="display-4">Employee Directory</h1>
            <h3 class="lead">Click on the Name to sort by an Employee's Last Name</h3>
            <hr class="my-4"></hr>
        </div>
    </div>
    );
}

export default Navbar;