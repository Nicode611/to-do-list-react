import React, { useState } from 'react';
import "./ListIconsContainer.css";
import ListIcon from './ListIcon/ListIcon';

function ListIconsContainer({ handleClick }) {
    const [icons, setIcons] = useState([]); // État pour stocker les icônes

    // Fonction pour ajouter une nouvelle icône
    const handleAddIcon = () => {
        const newIconId = `icon-${icons.length + 1}`; // Génère un ID unique pour chaque icône
        setIcons((prevIcons) => {
            const updatedIcons = [...prevIcons, newIconId];
            handleClick(updatedIcons); // Appelle la fonction parent avec la liste mise à jour
            return updatedIcons; // Met à jour l'état local
        });
    };

    const dataForChilds = "Hi";

    return (
        <div className='list-icons-container'>
            {/* Bouton pour ajouter une icône */}
            <button onClick={handleAddIcon}>Ajouter un ListIcon</button>

            {/* Rendu des ListIcons */}
            {icons.map((iconId) => (
                <ListIcon
                    key={iconId} // Utilise un ID unique pour chaque élément
                    uniqueKey={iconId}
                    data={dataForChilds} // Passe les données nécessaires à ListIcon
                />
            ))}
        </div>
    );
}

export default ListIconsContainer;