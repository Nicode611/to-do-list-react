import { createSlice } from "@reduxjs/toolkit"
export const listsSlice = createSlice({
    name : 'lists',
    initialState : {
        value : [],
        idcounter : 1,
        selected : false
    },
    reducers : {
        addList : (state, action) => {
            const { name, color, tasks} = action.payload;
            state.value.push({
                id : state.idcounter,
                name : name,
                color : color,
                tasks : tasks,
                selected : false
            });
            state.idcounter += 1;
        },
        delList : (state, action) => {
            state.value = state.value.filter(lists => lists.id !== action.payload);
        },
        selectList : (state, action) => {
            const id  = action.payload; 
            const list = state.value.find(list => list.id === id);

            if (list) {
                // Unselect the previous list
                const previousList = state.value.find(list => list.selected === true);
                if (previousList && previousList.id !== id) {
                    previousList.selected = false;
                }

                // Basculer l'état sélectionné de la nouvelle liste
                list.selected = !list.selected;
            }
        },
        addTask : (state, action) => {
            const { id, task } = action.payload
            const list = state.value.find(list => list.id === id);

            list.tasks = [task, ...list.tasks];
        }
        }
})
export const { addList, delList, selectList, addTask } = listsSlice.actions
export default listsSlice.reducer