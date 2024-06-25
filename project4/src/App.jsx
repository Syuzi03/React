import { useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductList } from './components/ProductList'
import { Basket } from './components/Basket'
import { useEffect } from 'react'
import { ProductContext, initialState } from './ProductContext'
import { reducer } from './ProductContext'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    fetch("http://localhost:3004/basket")
      .then(res => res.json())
      .then(data => {
        dispatch({ type: 'SET_PRODUCTS', payload: data })
      })
  }, [dispatch])

  useEffect(() => {
    dispatch({ type: 'SET_TOTAL' })
  }, [state.basket, dispatch])

  return <>
    <div className='raw'>
      <ProductContext.Provider value = {{state, dispatch}}>
        <ProductList />
        <Basket/>
    </ProductContext.Provider>
  </div>
  </>
}

export default App
