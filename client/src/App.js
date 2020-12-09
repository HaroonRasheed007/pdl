import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home.js';
import SignUp from './components/SignUp.js';
import Users from './components/Users.js';
import Orders from './components/Orders.js';
import NewOrder from './components/NewOrder.js';
import Header from './components/Header.js';
import LogIn from './components/LogIn.js';


function App() {
	return (
		<Router>
            <div className = "container">
                <Header />
            </div>

            <Route path = '/' exact>  <Home/>    </Route>
            <Route path = '/SignUp'>  <SignUp />   </Route>
            <Route path = '/Users'>    <Users/>     </Route>
            <Route path = '/Orders'>    <Orders/>     </Route>
            <Route path = '/NewOrder'>    <NewOrder/>     </Route>
            <Route path = '/LogIn'>  <LogIn />   </Route>
            


        </Router>
	);
}

export default App;
