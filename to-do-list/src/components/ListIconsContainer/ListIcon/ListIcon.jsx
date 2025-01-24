import React from 'react'
import "./ListIcon.css"

function ListIcon({uniqueKey, name, color, event}) {


    return (
        <div className='list-icon' onClick={() => {event(uniqueKey)}}>
            <span>{name}</span>
            <div className='list-color-dot' style={{background: `${color}`}}></div>
        </div>
    )
}

export default ListIcon
