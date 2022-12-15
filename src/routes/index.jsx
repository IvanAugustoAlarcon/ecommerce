import { Routes, Route } from 'react-router-dom'
import Error404 from '../pages/Error404'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Product from '../pages/Product'
import Signup from '../pages/Signup'
import Dashboard from '../pages/Dashboard'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/product/:id' element={<Product />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  )
}

export default RoutesIndex
