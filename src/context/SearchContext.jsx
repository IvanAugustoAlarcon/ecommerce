import { createContext, useState, useContext } from 'react'

const SearchContext = createContext()

const SearchProvider = (props) => {
  const [search, setSearch] = useState('')

  const value = {
    search,
    setSearch
  }

  return (
    <SearchContext.Provider value={value}>
      {props.children}
    </SearchContext.Provider>
  )
}

const useSearchContext = () => {
  const context = useContext(SearchContext)
  return context
}

export {
  SearchProvider,
  useSearchContext
}
