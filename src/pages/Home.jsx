import { useState, useEffect } from 'react'
import { getShopItems } from '../services/ApiServices'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [shopItems, setShopItems] = useState([])
  const navigate = useNavigate()
  // const [title, setTitle] = useState('')
  // const [overview, setOverview] = useState('')
  // const [ima, setIma] = useState('')

  useEffect(() => {
    getShopItems().then(async (data) => {
      const test = await data.data
      const results = test.filter((result) => {
        return result.image?.includes('http')
      })
      setShopItems(results)
    }).catch((error) => {
      console.log(error)
    })
  }, [])
  console.log(shopItems)

  const handlePageProduct = (id) => {
    navigate(`/product/${id}`)
  }
  return (
    <>
      <div className='container'>
        <div className='row'>
          {shopItems && shopItems.map((listShopItem, index) => (

            <div className=' col-sm-12 col-md-6 col-lg-5 col-xl-3 card-size' key={index}>
              <div className='card card-pointer' style={{ width: '18rem' }} onClick={() => { handlePageProduct(listShopItem._id) }}>
                <img className='card-img-top img-card' src={`${listShopItem.image}`} alt='Card image cap' style={{ width: '17rem', height: '20rem' }} />
                <h5>{listShopItem.product_name}</h5>
              </div>
            </div>

          ))}
        </div>
      </div>
    </>
  )
}

export default Home
