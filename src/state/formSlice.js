import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    formdetails:[]
}
export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        addForm:(state,action)=>{
            state.formdetails = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { addForm } = formSlice.actions

export default formSlice.reducer