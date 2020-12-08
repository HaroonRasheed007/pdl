import React from 'react';

function Orders () {
    return(
        <div className = "container">
            <table className="table mt-2">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Test Type</th>
                    <th>Order Status</th>
                    </tr>
                </thead>

                <tbody className = "table-success">
                    <tr>
                    <th scope="row">1</th>
                    <td>Jason</td>
                    <td>Bourne</td>
                    <td>1</td>
                    <td>Pending</td>
                    </tr>

                    <tr>
                    <th scope="row">2</th>
                    <td>James</td>
                    <td>Bond</td>
                    <td>4</td>
                    <td>Pending</td>
                    </tr>

                    <tr>
                    <th scope="row">3</th>
                    <td>Hunt</td>
                    <td>Ethan</td>
                    <td>2</td>
                    <td>Pending</td>
                    </tr>


                </tbody>
            </table>
        </div>
    )
}

export default Orders;