import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from "../../redux/slices/listsSlices"
import "./TasksContainer.css"
import Task from './Task/Task';

function ListContainer(props) {
    
    let dispatch = useDispatch();

     // State for the selected list
    let list = useSelector(state => state.lists.value.find(list => list.selected === true)) || { tasks: [] };
    
    let addTaskOpened = props.addTaskOpened;


    let addTaskToList = (id, task) => {
        dispatch(addTask({id, task}))
    }


    return (
        <div className='list-container'> 
            <ul className='task-container'>
                {/* Loop inside the tasks of the selected list */}
                {list.tasks.map((task) => (
                    <Task key={task.id} task={task.content} listId={list.id} taskId={task.id}/>
                ))}

                {/* if add task button pressed, show the task to add */}
                {addTaskOpened === true ? 
                <li className='task-element'>
                    <label className="custom-checkbox">
                    <input type="text" className="checkbox-label" placeholder='Nouvelle tache' required 
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && e.target.value !== "") {

                                const inputValue = e.target.value;
                                addTaskToList(list.id, inputValue);
                                e.target.value = ""; 
                            }
                        }} />
                    </label>
                </li> : ""} 
            </ul>
        </div>
    )
}

export default ListContainer
