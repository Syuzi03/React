export const BasketItem = ({title, price, count, onUp, onDown, onDelete, id}) =>{
    return <tr>
        <td>{title}</td>
        <td>{price}</td>
        <td>{count}</td>
        <td>{count * price} USD</td>
        <td> 
            <button onClick={()=>onUp(id)}>+</button>
            <button onClick={()=>onDown(id)}>-</button>
            <button onClick={()=>onDelete(id)}>x</button>

        </td>
    </tr>
}