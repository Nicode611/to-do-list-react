import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { delTask } from '../../../redux/slices/listsSlices';
import "./Task.css"

function Task({taskId, listId, task}) {

    let dispatch = useDispatch();

    const [isFadingOut, setIsFadingOut] = useState(false); // État pour gérer l'animation

    let deleteTask = (e, listId, taskId) => {
        e.stopPropagation();
    
        if (e.target.checked) {
            setIsFadingOut(true); // Déclenche l'animation

            setTimeout(() => {
                dispatch(delTask(listId, taskId)); // Supprime l'élément après l'animation
            }, 500); // Temps correspondant à l'animation en CSS
        }
    };

  return (
    <li className={`task-element ${isFadingOut ? 'fade-out' : ''}`}>
        <label className="custom-checkbox">
            <input type="checkbox" onChange={(e) => {deleteTask(e, {listId, taskId})}} />
            <span className="circle"></span>
            <input type="text" className="checkbox-label" value={task} readOnly />
        </label>
    </li>
  )
}

export default Task

