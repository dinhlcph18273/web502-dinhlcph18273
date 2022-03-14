import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Box from './component/box';

const App = () => {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {

    async function getProducts() {
      const reponse = await fetch("http://localhost:3001/api/products");
      const data = await reponse.json();
      setProducts(data);
    }
    getProducts();
  }, [])

  return <div>{count}
    <button onClick={() => setCount(count + 1)}>Click</button>
    {products.map(item => item.name)}
  </div>
}
export default App
