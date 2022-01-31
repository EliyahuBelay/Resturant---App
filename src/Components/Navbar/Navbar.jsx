import './Navbar.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
            <nav className='navbarContainer'>
                <ul className='navbar'>
                    <li className='navItem'><Link to={"/"}>Home</Link></li>
                    <li className='navItem'><Link to={"/Menu"}>Menu</Link></li>
                    <li className='navItem'><Link to={"/Orders"}>Orders</Link></li>
                </ul>
            </nav>
    )
}
export default Navbar;