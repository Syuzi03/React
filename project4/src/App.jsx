import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductList } from './components/ProductList'
import { Basket } from './components/Basket'
import { useEffect } from 'react'

function App() {
  const [products, setProducts] = useState([])
  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(()=>{
    fetch("http://localhost:3004/basket")
    .then(res => res.json())
    .then(res =>{
      setProducts(res)
    })
  }, [])
  const moveToCart = id =>{
    setBasket(prevBasket => {
      const found = prevBasket.find(x => x.id == id)
      if (found) {
        return prevBasket.map(x =>
          x.id == id ? { ...x, count: x.count + 1 } : x
        )
      }else {
        const found = products.find(x => x.id === id)
        return [...prevBasket, { ...found, count: 1 }]
      }
    })
  }

  const handleIncrement = id => {
    setBasket(prevBasket =>
      prevBasket.map(x =>
        x.id == id ? { ...x, count: x.count + 1 } : x
      )
    )
  }

  const handleDecrement = id => {
    setBasket(prevBasket =>
      prevBasket.map(x =>
        x.id == id && x.count > 1 ? { ...x, count: x.count - 1 } : x
      )
    )
  }

  const handleDelete = id => {
    setBasket(prevBasket => prevBasket.filter(x => x.id != id))
  }
  
  useEffect(()=>{
    setTotal(basket.reduce((a,b)=> a + (b.price * b.count), 0))
  }, [basket])

  return <>
    <div className='row'>
      <ProductList items = {products} onMove = {moveToCart}/>
      <Basket items = {basket} onUp={handleIncrement} onDown={handleDecrement} onDelete={handleDelete}
              total = {total}
      />
    </div>
  </>
}

export default App
