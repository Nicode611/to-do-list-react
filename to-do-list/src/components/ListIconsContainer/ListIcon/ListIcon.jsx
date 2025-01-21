import React from 'react'
import "./ListIcon.css"

function ListIcon({uniqueKey, handleClick}) {


    return (
        <div 
        className='list-icon'
        onClick={() => {handleClick(uniqueKey)}}
        >
        
        </div>
    )
}

export default ListIcon
