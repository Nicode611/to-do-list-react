import React from 'react'
import { useDispatch } from 'react-redux'
import { delTask } from '../../../redux/slices/listsSlices';
import "./Task.css"

function Task({ task, id}) {

    let dispatch = useDispatch();

    let deleteTask = (id, task) => {
        dispatch(delTask(id, task))
    }

  return (
    <li className='task-element'>
        <label class="custom-checkbox">
            <input type="checkbox" onClick={() => {deleteTask({id, task})}} />
            <span class="circle"></span>
            <input type="text" class="checkbox-label" value={task} />
        </label>
    </li>
  )
}

export default Task
