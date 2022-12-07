import { Routes, Route } from 'react-router-dom'
import Error404 from '../pages/Error404'
import Home from '../pages/Home'
import Product from '../pages/Product'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product/:id' element={<Product />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  )
}

export default RoutesIndex
