import React from 'react';


export class App extends React.Component {
    render() {
        return (
            <div className="app">
                <h1>My Application</h1>
                <button class="btn btn-success">If you can see this button, bootstrap is loaded...</button>
                <Table />
            </div>
        );
    }
};

export class Table extends React.Component {
    render() {
        return (
            <div className="myTable">
                <h3>My Table</h3>
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Age</td>
                            <td>Sex</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Jon</td>
                            <td>34</td>
                            <td>Male</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
};