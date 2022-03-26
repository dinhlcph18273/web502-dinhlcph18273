import { useEffect, useState } from 'react'
import './App.css'
import { ProductType } from './types/product'
import { add, list, remove, update } from './api/product'
import { Navigate, NavLink, Routes, Route } from "react-router-dom"
import WebsiteLayout from './page/layouts/WebsiteLayout'
import HomePage from './page/HomePage'
import ProductPage from './page/ProductPage'
import AdminLayout from './page/layouts/AdminLayout'
import Dashboard from './page/Dashboard'
import ProductManager from './page/ProductManager'
import ProductDetail from './page/ProductDetail'
import ProductAdd from './page/ProductAdd'
import ProductEdit from './page/ProductEdit'
import PrivateRouter from './component/PrivateRouter'
import Signup from './page/Signup'
import Signin from './page/Signin'

function App() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProducts();
  }, [])

  const onHandlerAdd = async (product: any) => {

    const { data } = await add(product);
    setProducts([...products, data])
  }
  const onHandlerRemove = (id: number) => {
    remove(id);
    setProducts(products.filter(item => item._id !== id))
  }
  const onHandlerUpdate = async (product: ProductType) => {
    const { data } = await update(product)
    setProducts(products.map(item => item._id === data._id ? product : item))
  }
  return (
    <div className='App'>
      <main>
        <Routes>
          <Route path="/" element={<WebsiteLayout />} >
            <Route index element={<HomePage products={products} />} />
            <Route path='products'>
              <Route index element={<ProductPage products={products} />} />
              <Route path=':id' element={<ProductDetail products={products} />} />
            </Route>
          </Route>

          <Route path='admin' element={<PrivateRouter><AdminLayout /></PrivateRouter>}>
            <Route index element={<Navigate to="/admin/dashboard" />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='products'>
              <Route index element={<ProductManager products={products} onRemove={onHandlerRemove} />} />
              <Route path='add' element={<ProductAdd onAdd={onHandlerAdd} />} />
              <Route path=':id/edit' element={<ProductEdit onUpdate={onHandlerUpdate} />} />
              <Route />
            </Route>
          </Route>

          <Route path='signup' element={<Signup />} />
          <Route path='signin' element={<Signin />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;
