import { Link } from 'react-router-dom'
// import useSearch from '../hooks/useSearch'
import { useSearchContext } from '../context/SearchContext'
import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '@/context/AuthContext'
import { getSingleUser } from '@/services/ApiServices'

const Header = () => {
  // const { input, handleInputChange } = useSearch()
  const { isAuth, logout, user } = useContext(AuthContext)
  const [userData, setUserData] = useState({})
  const context = useSearchContext()

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const result = await getSingleUser(user.id)
        if (result.status === 200) {
          setUserData(result.data)
        }
      } catch (error) {
        console.log('Ocurrio un error en Dashboard: ' + error.message)
      }
    }
    fetchUserData()
  }, [isAuth])

  const handleSearch = (e) => {
    context.setSearch(e.target.value)
  }
  // console.log('Viene del hook', input)
  return (
    <>
      <div>
        <nav className='navbar navbar-expand-lg bg-light'>
          <div className='container-fluid'>
            <h5 className='navbar-brand'>Ecommer</h5>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon' />
            </button>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                  <Link className='nav-link' to='/'>Home</Link>
                </li>
                {
                  !isAuth
                    ? (
                      <>
                        <li className='nav-item'>
                          <Link to='/login' className='nav-link'>Login</Link>
                        </li>
                        <li className='nav-item'>
                          <Link to='/signup' className='nav-link'>Signup</Link>
                        </li>
                      </>
                      )
                    : (
                      <>
                        <li className='item'>
                          <Link to='/' className='nav-link' onClick={logout}>Logout</Link>
                        </li>
                        {
                          user?.role === 'ADMIN' ? <p className='nav-link'>Hola Admin: {userData.first_name}</p> : <p className='nav-link'>Hola Customer: {userData.first_name}</p>
                        }
                        {/* {
                          userData?.first_name && <p className='nav-link'>{userData.first_name}</p>
                        } */}
                      </>
                      )
                }

              </ul>
              <form className='d-flex' role='search'>
                <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search' onChange={handleSearch} />  {/* onChange={handleInputChange} este handle viene del hook */}
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Header
