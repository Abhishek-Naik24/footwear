import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import  formSlice  from './formSlice'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    form: formSlice,
  },
})