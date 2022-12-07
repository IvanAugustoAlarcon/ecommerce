import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getShopItemsById } from '../services/ApiServices'

const Product = () => {
  const { id } = useParams()
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getShopItemsById(id).then(async (data) => {
      const test = await data.data
      setProduct(test)
      setLoading(false)
    })
  }, [])
  // console.log({ product })
  const Loading = () => {
    return (
      <>
        Loading .....
      </>
    )
  }

  const ShowProduct = () => {
    console.log({ product })
    return (
      <>
        <div className='col-md-6'>
          <img src={product.image} height='400px' width='400px' />
        </div>
        <div className='col-md-6'>
          <h4 className='text-uppercase text-black-50'>
            {product.category}
          </h4>
          <h1 className='display-5'>{product.product_name}</h1>
          <h3 className='display-6 fw-bold my-4'>
            $ {product.price}
          </h3>
          <p className='lead'>{product.description}</p>
          <button className='btn btn-outline-dark px-4 py-2'>
            Add to Cart
          </button>
          <button className='btn btn-dark ms-2 px-3 py-2'>
            Go to Cart
          </button>
        </div>
      </>
    )
  }

  return (
    <>
      <div className='container py-5'>
        <div className='row py-5'>
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </>
  )
}

export default Product
