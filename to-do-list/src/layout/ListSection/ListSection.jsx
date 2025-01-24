import React from 'react'
import "./ListSection.css";

import ListContainer from '../../components/ListContainer/ListContainer';

function ListSection() {
    return (
        <div className='list-section'>
            <div></div>
            <div>
                <h2 className='list-title'>Groceries list</h2>
            </div>
            <ListContainer></ListContainer>
        </div>
    )
}

export default ListSection
