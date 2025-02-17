import React from 'react'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import PlusIcon from "../../assets/icons/plus-icon.png";
import noTaskImg from "../../assets/images/no-task-image-2.png"
import "./TasksSection.css";
import TasksContainer from '../../components/TasksContainer/TasksContainer';

function ListSection() {

    // State for the selected list
    let list = useSelector(state => state.lists.value.find(list => list.selected === true));

    //State to add Task
    let [task, setTask] = useState(false)

    let handleAddTask = () => {
        setTask(!task)
    }


    return (
        <div className="list-section" style={{ overflowY: list ? "auto" : "hidden" }}>

            {list ? 
            <div className='tasks-section'>
                <div className='task-tools-container'>
                    <img className='add-task-icon' src={PlusIcon} alt="" onClick={handleAddTask}/>
                </div>
                <div className='list-title-container'>
                    <h2 className='list-title'>{list.name}</h2>
                </div>
                <TasksContainer addTaskOpened={task} handleAddTask={handleAddTask}></TasksContainer>
                
            </div>
            : 
            <div className='no-tasks-section'>
                {/* <img alt='no-task-image' className='no-task-image' src={noTaskImg}/> */}
                <span className='create-list-title'>Please select a list</span>
            </div>
            }
        </div>
    )
}

export default ListSection
