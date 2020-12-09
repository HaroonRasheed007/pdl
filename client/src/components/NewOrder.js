import {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function NewOrder () {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [orderType, setOrderType] = useState('');
    
    const handleSubmit = (event) => {

        if (!firstname) {
            event.preventDefault();
            alert('First Name cannot be blank!')   
        }

        else if (!lastname) {
            event.preventDefault();
            alert('Last Name cannot be blank!')
        }


        else {

            const order = {
                patientFirstname: firstname,
                patientLastname: lastname,
                orderType: orderType,
                orderStatus: 'Pending'
            }

            console.log(order);

            axios.post('http://localhost:5000/orders/create', order)

                .then(alert('Order created!'))

                .catch(error => console.log(error))
                

        }

    }  






    return(
       
        <form className="container">
            
            <input className="form-control mb-2 mt-2"
                value = {firstname}
                placeholder = "First Name"
                onChange = { (e) => {setFirstname(e.target.value)}}
            />

            <input className="form-control mb-2 "
                value = {lastname}
                placeholder = "Last Name"
                onChange = { (e) => {setLastname(e.target.value)}}               
            />

            <select
                className="custom-select mb-2"
                value = {orderType}  
                onChange = { (e) => {setOrderType(e.target.value)}}>
                <option value = "1" selected>Test Type 1</option>
                <option value = "2">Test Type 2</option>
                <option value = "3">Test Type 3</option>
                <option value = "4">Test Type 4</option>
            </select>


           
            <Link onClick = {handleSubmit} to = '/'>
                <button className="btn btn-success"> Order Test </button>    
            </Link>
        
        
        </form>

    
    )
}

export default NewOrder;