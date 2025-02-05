import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import "./AddListModal.css"
import { addList } from "../../redux/slices/listsSlices"

function AddListModal({isOpen, handleClick, listInfo}) {

    let dispatch = useDispatch();

    // Display setting of the modal window
    let modalParam={
        display: `${isOpen ? "flex" : "none"}`,
    }

    // Stop the propagation
    const stopClickPropagation = (e) => {
        e.stopPropagation(); 
    };

    // State for the infos filled on the modal
    const [listName, setListName] = useState('');
    const [listColor, setListColor] = useState('');


    // Event when submit the infos
    const handleSubmit = (e) => {
        e.preventDefault(); 



        dispatch(addList({
            name : listName,
            color : listColor,
            tasks : []
        }))
        handleClick(); // Close modal
    };


    return (
        <div className='add-list-modal-section' style={modalParam} onClick={handleClick}>
            <div className='add-list-modal-container' onClick={stopClickPropagation}>
            <form className="add-list-form" onSubmit={handleSubmit}>
                    <label>
                        List name : 
                        <input
                            type="text"
                            onChange={(e) => setListName(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))}
                            value={listName}
                            required
                        />
                    </label>
                    <label>
                        List color : 
                        <select id="mon-select" name="options" onChange={(e) => setListColor(e.target.value)} value={listColor} required >
                            <option value="" disabled>Color </option>
                            <option value="#274bde">blue</option>
                            <option value="#59cd39">green</option>
                            <option value="#d53636">red</option>
                        </select>
                    </label>
                    <button type="submit">Create</button>
                </form>
            </div>
        </div>
    )
}

export default AddListModal
