import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/Logo.png'
const Header = () => {
    [isLoggedIn, setIsLoggedIn] = useState(false)
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} />
            </div>
            <div className="nav-items">
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About Us</li></Link>
                    <Link to="/contact"><li>Contact Us</li></Link>
                    <li>Cart</li>
                    {isLoggedIn ? (<button onClick={() => setIsLoggedIn(false)}>Log Out</button>) : 
                    (<button onClick={() => setIsLoggedIn(true)}>Log In</button>)}
                </ul>
            </div>
        </div>
    )
}

export default Header;