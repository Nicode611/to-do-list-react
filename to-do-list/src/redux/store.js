import { configureStore } from '@reduxjs/toolkit'
import testReducer from "./slices/testSlice"
import listsReducer from "./slices/listsSlices"
export default configureStore({
    reducer : {
        test : testReducer,
        lists : listsReducer
    }
})