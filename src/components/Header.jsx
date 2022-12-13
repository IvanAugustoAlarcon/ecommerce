import React from 'react'
import { Link } from 'react-router-dom'
// import useSearch from '../hooks/useSearch'
import { useSearchContext } from '../context/SearchContext'

const Header = () => {
  // const { input, handleInputChange } = useSearch()
  const context = useSearchContext()

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
                <li className='nav-item'>
                  <Link to='/login' className='nav-link'>Login</Link>
                </li>
                <li className='nav-item'>
                  <Link to='/signup' className='nav-link'>Signup</Link>
                </li>
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
