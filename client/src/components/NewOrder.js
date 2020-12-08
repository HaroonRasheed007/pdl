import React from 'react';

function NewOrder () {
    return(
       
        <form className="container">
            
            <input className="form-control mb-2 mt-2"
                
                placeholder="First Name"
            />

            <input className="form-control mb-2 "
             
                placeholder="Last Name"
            />

            <select className="custom-select mb-2">
                <option selected>Test Type 1</option>
                <option value="1">Test Type 2</option>
                <option value="2">Test Type 3</option>
                <option value="3">Test Type 4</option>
            </select>


           
            <button type="submit" className="btn btn-success">
                Submit
            </button>
        
        
        </form>

    
    )
}

export default NewOrder;