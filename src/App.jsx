import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Box from './component/box';

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");
  const [myStatus, setMyStatus] = useState(false);
  const [products, setProducts] = useState([{ id: 1, name: "A" }, { id: 2, name: "B" }, { id: 3, name: "C" }]);

  const removeItem = (id) => {
    setProducts(products.filter(item => item.id !== id))
  }
  return <div>

    String: <Box color={color} /> <br />
    Boolean: {myStatus ? "Da ket hon" : "Chua ket hon"} <br />

    Number: {count} <br /> <button onClick={() => setCount(count + 1)}>Change Count</button>

    <button onClick={() => setMyStatus(!myStatus)}>Toggled Status</button>
    {myStatus && <div>
      Arr: {products.map(item => <div>  {item.name}
        <button onClick={() => removeItem(item.id)}>Delete</button>
      </div>)}
    </div>}
  </div>
}

export default App
