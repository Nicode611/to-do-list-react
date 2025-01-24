import React from 'react'
import PlusIcon from "../../assets/icons/plus-icon.png";
import "./ListSection.css";

import ListContainer from '../../components/ListContainer/ListContainer';

function ListSection() {
    return (
        <div className='list-section'>
            <div className='task-tools-container'>
                <img className='add-task-icon' src={PlusIcon} alt="" />
            </div>
            <div className='list-title-container'>
                <h2 className='list-title'>Groceries list</h2>
            </div>
            <ListContainer></ListContainer>
        </div>
    )
}

export default ListSection
