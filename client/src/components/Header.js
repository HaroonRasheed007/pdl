import {Link} from 'react-router-dom';

function Header () {
    return(
            <nav className = "navbar navbar-expand-lg navbar-dark bg-success">
                <Link to="/" className="navbar-brand">
                    PDL
                </Link>

            <div className = "collapse navbar-collapse"> 
                <ul className = "navbar-nav mr-auto">
                    <li className = "nav-item">
                        <Link to="/NewOrder" className="nav-link">
                            Get a Test
                        </Link>
                    </li>

                    <li>
                    <Link to="/SignUp" className="nav-link">
                        Create Account
                        </Link>
                    </li>


                    <li>
                    <Link to="/Users" className="nav-link">
                        Users
                        </Link>
                    </li>


                    <li>
                    <Link to="/Orders" className="nav-link">
                        Orders
                        </Link>
                    </li>

                </ul>

                
            </div>


            </nav>
            
    )
}

export default Header;