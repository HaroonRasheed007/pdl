import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SignUp (props) {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (event) => {

        if (!username) {
            event.preventDefault();
            alert('Username cannot be blank!')
            
        }

        else if (!password) {
            event.preventDefault();
            alert('Password cannot be blank!')
        }

        else {

            const user = {
                username: username,
                password: password
            }

            console.log(user);

            axios.post('http://localhost:5000/users/signup', user)

                .then(alert('User created!'))

                .catch(error => console.log(error))
                

        }

    }  


    
    
    return(
        <div>
            
            <form className = "container">
                <input className="form-control mb-2 mt-2"
                    value = {username}
                    placeholder = 'Username'
                    onChange = { (e) => {setUsername(e.target.value)}}                
                />

                <input className="form-control mb-2"
                    value = {password}
                    //type = 'password'
                    placeholder = 'Password'
                    onChange = { (e) => {setPassword(e.target.value)}}                
                />

                <Link onClick = {handleSubmit} to = '/'>
                    <button className="btn btn-success"> Create Account </button>
                
                </Link>

            </form>
        </div>
    )
}


export default SignUp;