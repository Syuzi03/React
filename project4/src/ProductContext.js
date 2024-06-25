import React from 'react'

export const ProductContext = React.createContext()

export const initialState = {
    products: [], 
    basket: [], 
    total: 0
}

export const reducer = (state, action) => {
    switch(action.type) {
      case 'SET_PRODUCTS':
        return {
          ...state,
          products: action.payload
        }
      case 'MOVE_TO_CART':
        if (state.basket.find(x => x.id === action.payload.id)) {
          return {
            ...state,
            basket: state.basket.map(x => 
              x.id === action.payload.id ? { ...x, count: x.count + 1 } : x
            )
          }
        } else {
          return {
            ...state,
            basket: [...state.basket, { ...action.payload, count: 1 }]
          }
        }
      case 'INCREMENT':
        return {
          ...state,
          basket: state.basket.map(x => 
            x.id === action.payload ? { ...x, count: x.count + 1 } : x
          )
        }
      case 'DECREMENT':
        return {
          ...state,
          basket: state.basket.map(x => 
            x.id === action.payload && x.count > 1 ? { ...x, count: x.count - 1 } : x
          )
        }
      case 'DELETE':
        return {
          ...state,
          basket: state.basket.filter(x => x.id !== action.payload)
        }
      case 'SET_TOTAL':
        return {
          ...state,
          total: state.basket.reduce((a, b) => a + (b.price * b.count), 0)
        }
      default:
        return state
    }
  }