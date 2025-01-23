import React from 'react'
import { useState,useEffect } from 'react'
import "./AddListModal.css"

function AddListModal({isOpen, handleClick, listInfo}) {

    const [listName, setListName] = useState('');
    const [listColor, setListColor] = useState('');

    let modalParam={
        display: `${isOpen ? "flex" : "none"}`,
    }

    const stopClickPropagation = (e) => {
        e.stopPropagation(); // Empêche la propagation de l'événement
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Empêche le rechargement de la page
        let newListInfos = [listName, listColor] 
        listInfo(newListInfos);
        handleClick();
        // Vous pouvez ajouter une logique supplémentaire ici, par exemple, sauvegarder dans un state ou une variable
    };

    return (
        <div className='add-list-modal-section' style={modalParam} onClick={handleClick}>
            <div className='add-list-modal-container' onClick={stopClickPropagation}>
            <form className="add-list-form" onSubmit={handleSubmit}>
                    <label>
                        List name:
                        <input
                            type="text"
                            value={listName}
                            onChange={(e) => setListName(e.target.value)}
                        />
                    </label>
                    <label>
                        List color:
                        <input
                            type="text"
                            value={listColor}
                            onChange={(e) => setListColor(e.target.value)}
                        />
                    </label>
                    <button type="submit">Create</button>
                </form>
            </div>
        </div>
    )
}

export default AddListModal
