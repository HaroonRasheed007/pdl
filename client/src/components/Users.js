import React from 'react';

function Users () {
    return(
        <div className = "container">
            <table className="table mt-2">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    </tr>
                </thead>

                <tbody className = "table-success">
                    <tr>
                    <th scope="row">1</th>
                    <td>Tom</td>
                    <td>Riddle</td>
                    <button className="btn btn-success"> Details </button>
                    </tr>

                    <tr>
                    <th scope="row">2</th>
                    <td>Newt</td>
                    <td>Scamander</td>
                    <button className="btn btn-success"> Details </button>
                    </tr>

                    <tr>
                    <th scope="row">3</th>
                    <td>Albus</td>
                    <td>Dumbledore</td>
                    <button className="btn btn-success"> Details </button>
                    </tr>


                </tbody>
            </table>
        </div>
    )
}

export default Users;