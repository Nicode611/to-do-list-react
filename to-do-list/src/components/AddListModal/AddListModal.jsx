import React from 'react'
import { useState } from 'react'
import "./AddListModal.css"

function AddListModal({isOpen, handleClick, listInfo}) {

    // State for the infos filled on the modal
    const [listName, setListName] = useState('');
    const [listColor, setListColor] = useState('');

    // Display setting of the modal window
    let modalParam={
        display: `${isOpen ? "flex" : "none"}`,
    }

    // Stop the propagation
    const stopClickPropagation = (e) => {
        e.stopPropagation(); 
    };

    // Event when submit the infos
    const handleSubmit = (e) => {
        e.preventDefault(); // Empêche le rechargement de la page
        let newListInfos = [listName, listColor] 
        listInfo(newListInfos); // Send the list infos to the parent
        handleClick(); // Close modal

        setListColor('');
        setListName('');
    };


    return (
        <div className='add-list-modal-section' style={modalParam} onClick={handleClick}>
            <div className='add-list-modal-container' onClick={stopClickPropagation}>
            <form className="add-list-form" onSubmit={handleSubmit}>
                    <label>
                        List name : 
                        <input
                            type="text"
                            onChange={(e) => setListName(e.target.value)}
                            value={listName}
                        />
                    </label>
                    <label>
                        List color : 
                        <select id="mon-select" name="options" onChange={(e) => setListColor(e.target.value)}
                        value={listColor}
                        >
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
