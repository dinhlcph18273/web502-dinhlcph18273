import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Product } from './types/product'
import ShowInfor from './component/ShowInfor'

function App() {
  const [count, setCount] = useState<number>(0)
  const [info, setInfo] = useState<Product>({
    name: "Định",
    age: 11
  })
  return (
    <div className="App">
      {count} <button onClick={() => setCount(count + 1)}>plussssss</button>
      <ShowInfor person={info} />

      <h1>Tên: {info.name}</h1>
      <h2>Tuổi: {info.age}</h2>
    </div>
  )
}

export default App
