import axios from 'axios'

const BASE_URL = 'https://e-commerce-backend-production-ad56.up.railway.app/api/v1/item'

const getShopItems = () => axios.get(`${BASE_URL}`)
const getShopItemsById = (id) => axios.get(`${BASE_URL}/${id}`)

export { getShopItems, getShopItemsById }
