import './App.css';
import Button from './Button';
import { useState, useEffect } from 'react';
function App() {

  // const [todo, setTodo] = useState("");
  // const [todos, setTodos] = useState([]);
  // const onChange = (e) => setTodo(e.target.value);
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   setTodos(prev => [todo, ...prev])
  //   setTodo("");
  // }
  // console.log(todo);

  // useEffect(() => {
  //   console.log(todos);
  // }, [todos])


  const [money, setMoney] = useState(1);
  const [cost, setCost] = useState(1);
  const [loading, setLoading] = useState(true);
  const [coins, setCoins]  = useState([]);

  useEffect(()=> {
    fetch('https://api.coinpaprika.com/v1/tickers')
    .then(res => res.json())
    .then(json => {
      setCoins(json)
      setLoading(false)
      
    })
  }, [])

  const onChange = (e) => {
    setCost(e.target.value);
    setMoney(1);
  }

  

  return (
    <div className="App">
      {/* <form onSubmit={onSubmit}>
        <input type="text" placeholder="What do you have to do" value={todo} onChange={onChange}/>
        <button>Add</button>
      </form>
      <ul>
        {todos.map((item, index) => <li key={index}>{item}</li>)}
      </ul> */}

      <h1>Coins!</h1>
      <h3>Your invest</h3>
      <input type="number" placeholder="Investment" onChange={(e) => setMoney(e.target.value)} value={money}/>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onChange}>
          <option>Select Coin</option>
          {coins.map((coin, index) => (
            <option
            key={index}
            value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <p>You can buy {money / cost}</p>
    </div>
  );
}

export default App;
