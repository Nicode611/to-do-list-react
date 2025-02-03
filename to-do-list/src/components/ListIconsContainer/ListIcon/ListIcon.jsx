import React from 'react'
import "./ListIcon.css"

function ListIcon({uniqueKey, name, color, event}) {

    return (
        <div className='list-icon' >
            <div className='list-del-icon' onClick={() => {event(uniqueKey)}}>X</div>
            <span>{name}</span>
            <div className='list-color-dot' style={{background: `${color}`}}></div>
        </div>
    )
}

export default ListIcon
