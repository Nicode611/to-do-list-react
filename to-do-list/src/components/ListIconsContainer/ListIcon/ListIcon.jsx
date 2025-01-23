import React from 'react'
import "./ListIcon.css"

function ListIcon({uniqueKey, name, color, event}) {


    return (
        <div 
        className='list-icon'
        onClick={() => {event(uniqueKey)}}
        >
        {name} et key : {uniqueKey}
        </div>
    )
}

export default ListIcon
