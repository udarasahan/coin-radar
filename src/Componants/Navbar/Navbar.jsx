import './Navbar.css';
import { assets } from '../../assets/assets';
import { useContext } from 'react';
import { CoinContext } from '../../Context/CoinContext';
import { Link } from 'react-router-dom';

const Navbar = () => {

const {setCurrency} = useContext(CoinContext)

const currencyHandler = (event) => {
  switch (event.target.value) {
    case "usd": {
      setCurrency({name: "usd", symbol: "$"})
      break;
    }
    case "eur": {
      setCurrency({name: "eur", symbol: "€"})
      break;
    }
    case "lkr": {
      setCurrency({name: "lkr", symbol: "Rs."})
      break;
    }
    default: {
      setCurrency({name: "usd", symbol: "$"})
      break;
    }
  }
}

  return (
    <div className='navbar'>
        <Link to={"/"}>
            <img src={assets.logo} alt="" />
        </Link>
        <ul className='menu-list'>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className="nav-right">
            <select onChange={currencyHandler}>
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