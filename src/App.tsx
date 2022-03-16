import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Product } from './types/product'
import ShowInfor from './component/ShowInfor'
import { list } from './api/product'
import { Navigate, NavLink, Routes, Route } from "react-router-dom"
import WebsiteLayout from './page/layouts/WebsiteLayout'
import HomePage from './page/homePage'
import ProductPage from './page/ProductPage'
import AdminLayout from './page/layouts/AdminLayout'
import Dashboard from './page/Dashboard'
import ProductManager from './page/ProductManager'
import ProductDetail from './page/ProductDetail'

function App() {
  const [products, setProducts] = useState<{ _id: number, name: String }[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProducts();
  }, [])
  return (
    <div className='App'>
      <header>
        <ul>
          <li><NavLink to='/'>Home Page</NavLink></li>
          <li><NavLink to='/product'>Products</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
        </ul>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<WebsiteLayout />} >
            <Route index element={<HomePage />} />
            <Route path='product'>
              <Route index element={<ProductPage />} />
              <Route path=':id' element={<ProductDetail />} />
            </Route>
          </Route>
          <Route path='admin' element={<AdminLayout />}>
            <Route index element={<Navigate to="/admin/dashboard" />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='product' element={<ProductManager />} />
          </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
