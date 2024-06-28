import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" />
        <ul className='menu-list'>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className="nav-right">
            <select>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="lkr">LKR</option>
            </select>
            <button>Sign Up <img src={assets.signUp} className='signup-btn-icon' alt="" /></button>
        </div>
    </div>
  )
}

export default Navbar