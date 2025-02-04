import React from 'react'
import Task from './Task/Task';
import { useSelector, useDispatch } from 'react-redux';
import "./TasksContainer.css"

import { addTask } from "../../redux/slices/listsSlices"

function ListContainer(props) {
    
    let dispatch = useDispatch();

     // State for the selected list
    let list = useSelector(state => state.lists.value.find(list => list.selected === true)) || { tasks: [] };
    
    const addTaskOpened = props.addTaskOpened;

    let addTaskToList = (id, task) => {
        dispatch(addTask({id, task}))
    }


    return (
        <div className='list-container'> 
            <ul className='task-container'>
                {/* Loop inside the tasks of the selected list */}
                {list.tasks.map((task) => (
                    <Task task={task} id={list.id}/>
                ))}

                {/* if add task button pressed, show the task to add */}
                {addTaskOpened === true ? 
                <li className='task-element'>
                    <label class="custom-checkbox">
                        <input type="text" class="checkbox-label" required 
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && e.target.value !== "") {
                                e.preventDefault();
                                addTaskToList(list.id, e.target.value); 
                                e.target.value = ""; 
                            }}} />
                    </label>
                </li> : ""} 
            </ul>
        </div>
    )
}

export default ListContainer
