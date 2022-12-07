import { useLocation } from 'react-router-dom'

const Error404 = () => {
  const location = useLocation()
  return (
    <>
      <h1>Error404</h1>
      <p>Route: {location.pathname} not found</p>
    </>
  )
}

export default Error404
