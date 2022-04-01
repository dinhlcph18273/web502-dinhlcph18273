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
import CategoryManager from './page/CategoryManager'
import { CategoryType } from './types/category'
import { createCate, listCate, removeCate, updateCate } from './api/category'
import CategoryAdd from './page/CategoryAdd'
import CategoryEdit from './page/CategoryEdit'
import CategoryPage from './page/CategoryPage'
import { listPost } from './api/post'


function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [categories, setCategory] = useState<CategoryType[]>([])
  const [post, setPost] = useState<any[]>([])

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProducts();
    const getCategory = async () => {
      const { data } = await listCate();
      setCategory(data)
    }
    getCategory();
    const getPost = async () => {
      const { data } = await listPost();
      setPost(data)
    }
    getPost()
  }, [])

  const onHandlerAdd = async (product: any) => {

    const { data } = await add(product);
    setProducts([...products, data])
  }
  const onHandlerRemove = (id: number) => {
    const confirm = window.confirm("Bạn có chắc muốn xóa?")
    if (confirm) {
      remove(id);
      setProducts(products.filter(item => item._id !== id))
    }
  }
  const onHandlerUpdate = async (product: ProductType) => {
    const { data } = await update(product)
    setProducts(products.map(item => item._id === data._id ? product : item))
  }

  const onHandlerRemoveCate = (id: number) => {
    const confirm = window.confirm("Bạn có chắc muốn xóa?")
    if (confirm) {
      removeCate(id)
      setCategory(categories.filter(item => item._id !== id))
    }
  }
  const onHandlerAddCate = async (category: any) => {
    const { data } = await createCate(category)
    setCategory([...categories, data])

  }
  const onHandlerUpdateCate = async (category: CategoryType) => {
    const { data } = await updateCate(category)
    setCategory(categories.map(item => item._id === data._id ? category : item))
  }
  return (
    <div className='App'>
      <main>
        <Routes>
          <Route path="/" element={<WebsiteLayout />} >
            <Route index element={<HomePage products={products} post={post} />} />
            <Route path='products'>
              <Route index element={<ProductPage category={categories} products={products} />} />
              <Route path=':id' element={<ProductDetail products={products} />} />
            </Route>
            <Route path='category/:id' element={<CategoryPage category={categories} />} />
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
            <Route path='category'>
              <Route index element={<CategoryManager category={categories} onRemoveCate={onHandlerRemoveCate} />} />
              <Route path='add' element={<CategoryAdd onAddCate={onHandlerAddCate} />} />
              <Route path=':id/edit' element={<CategoryEdit onEditCate={onHandlerUpdateCate} />} />
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
