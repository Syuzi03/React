import { useContext } from 'react'
import { ProductContext } from '../ProductContext'

export const ProductItem = ({ title, id, photo, price }) => {
    const { dispatch, state } = useContext(ProductContext)
  
    const handleMove = () => {
      const product = state.products.find(x => x.id === id)
      dispatch({ type: 'MOVE_TO_CART', payload: product })
    }
  
    return <>
      <div>
        <img src={photo} />
        <p>{title}</p>
        <p><strong>{price} USD</strong></p>
        <button onClick={handleMove}>move</button>
      </div>
    </>
  }