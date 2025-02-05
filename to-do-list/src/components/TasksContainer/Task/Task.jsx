import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { delTask } from '../../../redux/slices/listsSlices';
import "./Task.css"

function Task({task, listId}) {

    let dispatch = useDispatch();

    const [isFadingOut, setIsFadingOut] = useState(false); // État pour gérer l'animation

    let deleteTask = (e, listId, task) => {
        e.stopPropagation();
    
        if (e.target.checked) {
            setIsFadingOut(true); // Déclenche l'animation

            setTimeout(() => {
                dispatch(delTask(listId, task)); // Supprime l'élément après l'animation
            }, 500); // Temps correspondant à l'animation en CSS
        }
    };

  return (
    <li className={`task-element ${isFadingOut ? 'fade-out' : ''}`}>
        <label className="custom-checkbox">
            <input type="checkbox" onChange={(e) => {deleteTask(e, {listId, task})}} />
            <span className="circle"></span>
            <input type="text" className="checkbox-label" value={task} readOnly />
        </label>
    </li>
  )
}

export default Task

