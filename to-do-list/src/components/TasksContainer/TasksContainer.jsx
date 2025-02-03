import React from 'react'
import { useSelector } from 'react-redux';
import "./TasksContainer.css"

function ListContainer(addTask) {

     // State for the selected list
    let list = useSelector(state => state.lists.value.find(list => list.selected === true)) || { tasks: [] };
    

    let addTaskToList = () => {

    }


    return (
        <div className='list-container'> 
            <ul className='task-container'>
            {list.tasks.map((task) => (
                    <li className='task-element'>
                    <label class="custom-checkbox">
                        <input type="checkbox" />
                        <span class="circle"></span>
                        <input type="text" class="checkbox-label" />
                    </label>
                </li>
                ))}
                
                <li className='add-task'>
                </li>
            </ul>
        </div>
    )
}

export default ListContainer
