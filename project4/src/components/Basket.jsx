import { useContext } from 'react'
import { ProductContext } from '../ProductContext'
import { BasketItem } from './BasketItem'

export const Basket = () => {
  const { state } = useContext(ProductContext)

  return (
    <div>
      <h3>Basket</h3>
      <h4>Total: {state.total} USD</h4>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Count</th>
            <th>Subtotal</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.basket.map(elm => <BasketItem key={elm.id} {...elm} />)}
        </tbody>
      </table>
    </div>
  )
}
