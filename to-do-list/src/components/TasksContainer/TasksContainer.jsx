import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import "./TasksContainer.css"

import { addTask } from "../../redux/slices/listsSlices"

function ListContainer(props) {

     // State for the selected list
    let list = useSelector(state => state.lists.value.find(list => list.selected === true)) || { tasks: [] };

    let dispatch = useDispatch();
    
    const addTaskOpened = props.addTaskOpened;

    let addTaskToList = (id, task) => {
        dispatch(addTask({id, task}))
        console.log(list.tasks)
    }


    return (
        <div className='list-container'> 
            <ul className='task-container'>
                {list.tasks.map((task) => (
                    <li className='task-element'>
                    <label class="custom-checkbox">
                        <input type="checkbox" />
                        <span class="circle"></span>
                        <input type="text" class="checkbox-label" value={task} />
                    </label>
                    </li>
                ))}

                {addTaskOpened === true ? 
                <li className='task-element'>
                    <label class="custom-checkbox">
                        <input type="text" class="checkbox-label" required 
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                console.log("Touche Entrée pressée !");
                                e.preventDefault();
                                addTaskToList(list.id, e.target.value); // Appelle la fonction pour ajouter la tâche
                                e.target.value = ""; // Réinitialise l'input après l'ajout
                            }}} />
                    </label>
                </li> : ""} 
            </ul>
        </div>
    )
}

export default ListContainer
