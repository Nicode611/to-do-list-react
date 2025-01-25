import React from 'react'
import { useState } from 'react';
import PlusIcon from "../../assets/icons/plus-icon.png";
import "./ListSection.css";

import ListContainer from '../../components/ListContainer/ListContainer';

function ListSection(selectedList) {

    // State for selected List
    let [list, setList] = useState([])

    //State to add Task
    let [task, setTask] = useState(false)

    let handleAddTask = () => {
        setTask(!task)
    }


    return (
        <div className='list-section'>
            <div className='task-tools-container'>
                <img className='add-task-icon' src={PlusIcon} alt="" onClick={handleAddTask}/>
            </div>
            <div className='list-title-container'>
                <h2 className='list-title'>Groceries list</h2>
            </div>
            <ListContainer addTask={task}></ListContainer>
        </div>
    )
}

export default ListSection
