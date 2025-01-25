import React from 'react'
import { useState,useEffect } from 'react'
import "./ListContainer.css"

function ListContainer(addTask) {

    let [list, setList] = useState([]);

    let addTaskToList = () => {

    }


    return (
        <div className='list-container'> 
            <ul className='task-container'>
                <li className='task-element'>
                    <label class="custom-checkbox">
                        <input type="checkbox" />
                        <span class="circle"></span>
                        <input type="text" class="checkbox-label" />
                    </label>
                </li>
                <li className='task-element'>
                    <label class="custom-checkbox">
                        <input type="checkbox" />
                        <span class="circle"></span>
                        <input type="text" class="checkbox-label" />
                    </label>
                </li>
                <li className='add-task'>
                </li>
            </ul>
        </div>
    )
}

export default ListContainer
