import React from 'react';
import { useState } from 'react';
import "./ListIconsContainer.css";
import ListIcon from './ListIcon/ListIcon';

function ListIconsContainer({handleClick}) {

    const [icons, setIcons] = useState([]); // État pour stocker les composants ListIcon

  const handleAddIcon = () => {
    // Ajoute un nouvel identifiant pour un composant ListIcon
    setIcons((prevIcons) => [...prevIcons, `icon-${prevIcons.length + 1}`]);
    console.log(icons);
  };


    let dataForChilds = "Hi";


  return (
    <div className='list-icons-container'>
        <button onClick={handleAddIcon}>Ajouter un ListIcon</button>
        {icons.map((index) => (
        <ListIcon
          key={index}
          uniqueKey={index}
          data={dataForChilds} // Passer des données spécifiques si nécessaire
          handleClick={handleClick}
        />
      ))}
      
    </div>
  )
}

export default ListIconsContainer
