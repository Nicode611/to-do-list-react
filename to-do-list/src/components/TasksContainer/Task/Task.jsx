import React from 'react'
import { useDispatch } from 'react-redux'
import { delTask } from '../../../redux/slices/listsSlices';
import "./Task.css"

function Task({task, listId}) {

    let dispatch = useDispatch();

    let deleteTask = (e, listId, task) => {
        e.stopPropagation();
    
        if (e.target.checked) { 
            setTimeout(() => {
                dispatch(delTask(listId, task));
            }, 500);
        }
    };

  return (
    <li className='task-element'>
        <label className="custom-checkbox">
            <input type="checkbox" onChange={(e) => {deleteTask(e, {listId, task})}} />
            <span className="circle"></span>
            <input type="text" className="checkbox-label" value={task} readOnly />
        </label>
    </li>
  )
}

export default Task
