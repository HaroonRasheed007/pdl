import {useState, useEffect} from 'react';

function Orders () {

    const [orders, setOrders] = useState([]);

    useEffect (() => {
        fetch('http://localhost:5000/orders/')
            .then (res => res.json())
            .then ((result) => {setOrders(result)})



    },[])


    return(
        <div className = "container">
            <table className="table mt-2">
                <thead>
                    <tr>
                    <th>Patient Name</th>
                    <th>Test Type</th>
                    <th>Test Status</th>
                    </tr>
                </thead>

                <tbody className = "table-success">
                   
                    {orders.map(order => (
                        <tr key = {order.orderId}>
                            <td>{order.patientFirstname} {order.patientLastname}</td>
                            <td>{order.orderType}</td>
                            <td>{order.orderStatus}</td>
                        
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default Orders;