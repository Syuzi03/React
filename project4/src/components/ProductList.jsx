import { ProductItem } from "./ProductItem"
import { useContext } from 'react'
import { ProductContext } from '../ProductContext'

export const ProductList = () => {
    const { state } = useContext(ProductContext)
  
    return <>
      <div>
        <h3>ProductList</h3>
        <div className="list">
          {state.products.map(elm => <ProductItem key={elm.id} {...elm} />)}
        </div>
      </div>
    </>
  }