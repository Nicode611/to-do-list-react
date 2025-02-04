import React from 'react'
import { useDispatch } from 'react-redux'
import { delTask } from '../../../redux/slices/listsSlices';
import "./Task.css"

function Task(props) {

    let dispatch = useDispatch();

    let deleteTask = (id, task) => {
        dispatch(delTask(id, task))
        console.log(id, task)
    }

  return (
    <li className='task-element'>
        <label class="custom-checkbox">
            <input type="checkbox" onClick={() => {deleteTask(props.id, props.task)}} />
            <span class="circle"></span>
            <input type="text" class="checkbox-label" value={props.task} />
        </label>
    </li>
  )
}

export default Task
