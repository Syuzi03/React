import { useContext } from 'react'
import { ProductContext } from '../ProductContext'

export const BasketItem = ({ title, price, count, id }) => {
  const { dispatch } = useContext(ProductContext)

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT', payload: id })
  }

  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT', payload: id })
  }

  const handleDelete = () => {
    dispatch({ type: 'DELETE', payload: id })
  }

  return (
    <tr>
      <td>{title}</td>
      <td>{price}</td>
      <td>{count}</td>
      <td>{count * price} USD</td>
      <td>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleDelete}>x</button>
      </td>
    </tr>
  );
};
