import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartProducts: [],
    totalAmount: {
        subtotal: 0,
        total: 0
    },
    data: null,
    product: null
}

export const cartSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addtocart: (state, action) => {
            const ProductExist = state.cartProducts.find((item) => item.id === action.payload.id);
            if (ProductExist) {
                ProductExist.quantity += 1;
                // state.product.quantity += 1;
                state.totalAmount.subtotal += ProductExist.price * 1;
                state.totalAmount.total += ProductExist.price * 1;
            }
            else {
                state.cartProducts.push(action.payload);
                state.totalAmount.subtotal += action.payload.price * 1;
                const cartLength = Object.keys(state.cartProducts).length;
                state.totalAmount.total = state.totalAmount.subtotal + (cartLength * 50) - (cartLength * 10); //it assign every time when new item is added 
            }

        },
        increment: (state, action) => {
            const Product = state.cartProducts.find((item) => item.id === action.payload.id);
            if (Product) {
                Product.quantity += 1
                // state.product.quantity+=1;
                state.totalAmount.subtotal += action.payload.price * 1;
                state.totalAmount.total += action.payload.price * 1;
            }
        },
        decrement: (state, action) => {
            const Product = state.cartProducts.find((item) => item.id === action.payload.id);
            if (Product && Product.quantity > 1) {
                Product.quantity -= 1
                state.totalAmount.subtotal -= action.payload.price * 1;
                state.totalAmount.total -= action.payload.price * 1;
            }
        },
        remove: (state, action) => {
            const Product = state.cartProducts.filter((item) => item.id !== action.payload.id);
            state.cartProducts = Product;
            state.totalAmount.subtotal -= action.payload.price * action.payload.quantity;
            state.totalAmount.total -= action.payload.price * action.payload.quantity + 40;
        },
        setdata: (state, action) => {
            state.data = action.payload
            // console.log(state.data);
        },
        setproduct: (state, action) => {
            state.product = action.payload
        },
        EmptyCart: (state) => {
            state.cartProducts = []
        }
    },
})

// Action creators are generated for each case reducer function
export const { addtocart, increment, decrement, remove, setdata, setproduct, EmptyCart } = cartSlice.actions

export default cartSlice.reducer