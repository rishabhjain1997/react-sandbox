import { useState } from "react"
const useLocalStorage = (key, initialValue) => {
  const [localStorageValue, setLocalStorageValue] = useState(() =>
    getLocalStorageValue(key, initialValue)
  )

  const setValue = (value) => {
    //check if function
    const valueToStore =
      value instanceof Function ? value(setLocalStorageValue) : value
    // set to state
    setLocalStorageValue(valueToStore)
    // set to local storage
    localStorage.setItem(key, JSON.stringify(valueToStore))
  }
  return [localStorageValue, setValue]
}

const getLocalStorageValue = (key, initialValue) => {
  const itemFromStorage = localStorage.getItem(key)
  return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue
}
export default useLocalStorage
