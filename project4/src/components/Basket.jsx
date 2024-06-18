import { BasketItem } from "./BasketItem"

export const Basket = ({items, onUp, onDown, onDelete, total}) =>{
    return <div>
        <h3>Basket</h3>
        <h4>Total: {total} AMD</h4>
        <table>
            <thead>
                <tr>
                    <th>product</th>
                    <th>price</th>
                    <th>count</th>
                    <th>subtotal</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map(elm => <BasketItem key={elm.id} {...elm}
                        onUp={onUp} 
                        onDown={onDown}
                        onDelete={onDelete}/>)
                }
            </tbody>
        </table>
    </div>
}