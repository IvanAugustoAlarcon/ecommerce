import './App.css'
import Header from './components/Header'
import RoutesIndex from './routes'
import { SearchProvider } from './context/SearchContext'

function App () {
  return (
    <SearchProvider>
      <div className='App'>
        <Header />
        <RoutesIndex />
      </div>
    </SearchProvider>
  )
}

export default App
