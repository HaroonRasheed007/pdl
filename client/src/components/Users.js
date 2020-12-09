import {useState, useEffect} from 'react';

function Users () {

    const [users, setUsers] = useState([]);

    useEffect (() => {
        fetch('http://localhost:5000/users/')
            .then (res => res.json())
            .then ((result) => {setUsers(result)})



    },[])




    return(
        <div className = "container">
            <table className="table mt-2">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Username</th>

                    </tr>
                </thead>

                <tbody className = "table-success">
                   
                    {users.map(user => (
                        <tr key = {user.username}>
                            <td>{user.firstname} {user.lastname}</td>
                            <td>{user.username}</td>
                            <button className = "btn btn-success">
                                Details
                            </button>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default Users;