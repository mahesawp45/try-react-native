import { createSlice } from '@reduxjs/toolkit'
import { BASKET } from '../name'

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: BASKET,
  initialState,
  reducers: {
    addToBasket: (state, actions) => {
      state.items = [...state.items, actions.payload]
    },
    removeFromBasket: (state, actions) => {
        const itemIndex = state.items.findIndex((item) => item.id === actions.payload.id)

        let newBasket = [...state.items]

        // kalau item ada di basket
        if (itemIndex >= 0) {
            newBasket.splice(itemIndex, 1)
        } else {
            console.warn(`Can't remove item ( id : ${actions.payload.id}) as its not in basket!`)
        }

        state.items = newBasket
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions

export const selectBasketItems = (state) => state.basket.items

export const selectBasketItemsById = (state, id) => state.basket.items.filter((item) => item.id == id)

export const selectBasketTotal = (state) => state.basket.items.reduce((total, item) => total += item.price, 0)

export default basketSlice.reducer