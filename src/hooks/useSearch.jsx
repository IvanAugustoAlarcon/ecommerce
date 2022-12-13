import { useState } from 'react'

const useSearch = () => {
  const [input, setInput] = useState()

  const handleInputChange = (event) => {
    const { value } = event.target
    console.log(value)
    setInput(value)
  }

  return {
    input,
    handleInputChange
  }
}

export default useSearch
