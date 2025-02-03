import React from 'react'
import { useDispatch } from 'react-redux'
import "./ListIcon.css"

import { selectList } from '../../../redux/slices/listsSlices'

function ListIcon({uniqueKey, name, color, selected, event}) {

    let dispatch = useDispatch();

    return (
        <div className={`list-icon ${selected ? 'selected' : ''}`} onClick={() => {dispatch(selectList(uniqueKey))}}>
            <div className='list-del-icon' onClick={() => {event(uniqueKey)}}>X</div>
            <span>{name}</span>
            <div className='list-color-dot' style={{background: `${color}`}}></div>
        </div>
    )
}

export default ListIcon
