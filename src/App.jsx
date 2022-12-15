import './App.css'
import Header from './components/Header'
import RoutesIndex from './routes'
import { SearchProvider } from './context/SearchContext'
import { AuthProvider } from './context/AuthContext'

function App () {
  return (

    <SearchProvider>
      <AuthProvider>
        <Header />
        <RoutesIndex />
      </AuthProvider>
    </SearchProvider>

  )
}

export default App
