import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/Logo.png'
import useOnline from '../utils/useOnline';
import UserContext from '../utils/UserContext';

const Header = () => {
    [isLoggedIn, setIsLoggedIn] = useState(false)
    const isOnline = useOnline();
    const { user }= useContext(UserContext)
    return(
        <div className="flex justify-between">
            <div className="logo-container">
                <img className="h-28 p-2" src={logo} />
            </div>
            <div className="nav-items">
                <ul className='flex py-10'>
                    <Link to="/"><li className='px-2'>Home</li></Link>
                    <Link to="/about"><li className='px-2'>About Us</li></Link>
                    <Link to="/contact"><li className='px-2'>Contact Us</li></Link>
                    <Link to="/instamart"><li className='px-2'>Instamart</li></Link>
                    <li className='px-2'>Cart</li>
                    <li className='font-bold'>{user.name}</li>
                    {isLoggedIn ? (<button onClick={() => setIsLoggedIn(false)}>Log Out</button>) : 
                    (<button onClick={() => setIsLoggedIn(true)}>Log In</button>)}
                </ul>
            </div>
        </div>
    )
}

export default Header;