import React, { useState,useEffect, useRef } from 'react';
import "./ListIconsContainer.css";
import ListIcon from './ListIcon/ListIcon';

function ListIconsContainer({ handleClick }) {
    const [icons, setIcons] = useState([]); // State for list icons
    const idCounter = useRef(0);

    // Function to add a list
    const handleAddIcon = () => {
        idCounter.current += 1
        const newIconId = `icon-${idCounter.current}`;
        setIcons((prevIcons) => {
            const updatedIcons = [...prevIcons, newIconId];
            return updatedIcons; // Value of the new state
        });
    };

    // Function to delete a list
    let handleDelIcon = (choosedIconId) => {
        setIcons((prevIcons) => {
            let updatedIcons = prevIcons.filter(icon => icon !== choosedIconId);
            console.log(icons);
            return updatedIcons;
        })
    }
    
    useEffect(() => {
        if (icons.length > 0) {
            console.log(icons);
        }
    }, [icons])

    return (
        <div className='lists-section'>
            <div className='add-list-section'>
                {/* Bouton pour ajouter une icône */}
                <button onClick={handleAddIcon}>Ajouter un ListIcon</button>
            </div>
            <div className='list-icons-container'>
                {/* Rendu des ListIcons */}
                {icons.map((iconId) => (
                    <ListIcon
                        key={iconId} // Utilise un ID unique pour chaque élément
                        uniqueKey={iconId}
                        event={handleDelIcon} // Passe les données nécessaires à ListIcon
                    />
                ))}
            </div>
        </div>
    );
}

export default ListIconsContainer;