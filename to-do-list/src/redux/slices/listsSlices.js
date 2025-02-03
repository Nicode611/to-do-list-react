import { createSlice } from "@reduxjs/toolkit"
export const listsSlice = createSlice({
    name : 'lists',
    initialState : {
        value : [],
        idcounter : 1
    },
    reducers : {
        addList : (state, action) => {
            const { name, color, tasks} = action.payload;
            state.value.push({
                id : state.idcounter,
                name : name,
                color : color,
                tasks : tasks
            });
            state.idcounter += 1;
        },
        delList : (state, action) => {
            state.value = state.value.filter(lists => lists.id !== action.payload);
        }
    }
})
export const { addList, delList } = listsSlice.actions
export default listsSlice.reducer