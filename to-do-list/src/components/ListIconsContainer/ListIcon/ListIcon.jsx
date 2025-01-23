import React from 'react'
import "./ListIcon.css"

function ListIcon({uniqueKey, event}) {


    return (
        <div 
        className='list-icon'
        onClick={() => {event(uniqueKey)}}
        >
        {uniqueKey}
        </div>
    )
}

export default ListIcon
