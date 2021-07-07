import React from 'react';

function SearchForm(props) {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="search">Search:</label>
                <input
                onChange={props.handleInputChange}
                value={props.value}
                name="search"
                type="text"
                className="form-control"
                placeholder="Search by a State"
                id="employees"
                list="employee"
                />
                <br />
                <button type="submit" className="btn btn-primary" onClick={props.handleFormSubmit}>
                    Search
                </button>
            </div>
        </form>
    )
}

export default SearchForm;