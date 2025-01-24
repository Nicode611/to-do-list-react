import React from 'react'
import "./ListContainer.css"

function ListContainer() {

    let task = "The task";

    return (
        <div className='list-container'>
            <ul className='task-container'>
                <li className='task-element'>
                <label class="custom-checkbox">
                    <input type="checkbox" />
                    <span></span>
                    Option 1
                    <input className='task-name' type='text' value='The task' />
                </label>

                    {/* <input className='task-state' type="checkbox" />
                     */}
                </li>
            </ul>
        </div>
    )
}

export default ListContainer
