import { useContext, useEffect, useState } from 'react';
import './Home.css';
import { CoinContext } from '../../Context/CoinContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState('');

  const inputHandler = (event) => {
    setInput(event.target.value);
    if(event.target.value === "") {
      setDisplayCoin(allCoin);
    }
  }

  const searchHandler = async (event) => {
    event.preventDefault();
    const coins = await allCoin.filter((item)=> {
      return item.name.toLowerCase().includes(input.toLowerCase())
    })
    setDisplayCoin(coins)
  }

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <div className='home'>
      <div className="header">
        <h1>Effortless <br /> Crypto Price Monitoring</h1>
        <p>Welcome to CoinRadar, the best place to track cryptocurrency prices 
          with ease. <br /> Sign up to explore more about crypto. Start exploring now!</p>
        <form onSubmit={searchHandler}>
          <input type="text" placeholder='Search Crypto...' list='coinlist' value={input} onChange={inputHandler} required />

          <datalist id='coinlist'>
            {allCoin.map((item, index) => (<option key={index} value={item.name} />))}
          </datalist>


          <button type='submit'>Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{textAlign:"center"}}>24H Change</p>
          <p className='market-cap'>Market Cap</p>
        </div>
        {displayCoin.slice(0, 10).map((item, index) => (
          <Link to={`/coin/${item.id}`} className="table-layout" key={index}>
            <p>{item.market_cap_rank}</p>
            <div>
              <img src={item.image} alt={item.name} />
              <p>{item.name + " - " + item.symbol}</p>
            </div>  
              <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
              <p className={item.price_change_percentage_24h>0?"green":"red"}>
                {Math.floor(item.price_change_percentage_24h*100)/100}
              </p>
              <p className='market-cap'>{currency.symbol} {item.market_cap.toLocaleString()}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
