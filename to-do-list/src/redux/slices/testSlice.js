import { createSlice } from "@reduxjs/toolkit"
export const testSlice = createSlice({
    name : 'test',
    initialState : {
        value : false
    },
    reducers : {
        setTrue : (state) => {
            state.value = true
        },
        setFalse : (state) => {
            state.value = false
        }
    }
})
export const { setTrue, setFalse } = testSlice.actions
export default testSlice.reducer