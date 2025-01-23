import React, { useState,useEffect, useRef } from 'react';
import "./ListIconsContainer.css";
import ListIcon from './ListIcon/ListIcon';

function ListIconsContainer( {listInfos} ) {
    
    const [lists, setLists] = useState([]); // State for list Lists
    const idCounter = useRef(0);

    // Function to add a list
    const handleAddIcon = (listInfos) => {
        let newList = {
            key: idCounter.current += 1, 
            name: listInfos[0], 
            color: listInfos[1], 
        }
        setLists((prevLists) => [...prevLists, newList]);
    };

    // Function to delete a list
    const handleDelIcon = (key) => {
        setLists((prevLists) => {
            const updatedLists = prevLists.filter((list) => list.key !== key);
            console.log(updatedLists);
            return updatedLists;
        });
    };
    
    useEffect(() => {
        console.log(lists)
    }, [lists])


    useEffect(() => {
        if (listInfos.length !== 0) {
            handleAddIcon(listInfos)
            console.log(listInfos)
        }
    }, [listInfos])




    return (
        <div className='lists-section'>
            <div className='add-list-section'>
                {/* Bouton pour ajouter une icône */}
                <button onClick={handleAddIcon}>Ajouter un ListIcon</button>
            </div>
            <div className='list-icons-container'>
                {/* Rendu des ListLists */}
                {lists.map((list) => (
                    <ListIcon
                        key={list.key} // Utilise un ID unique pour chaque élément
                        uniqueKey={list.key}
                        name={list.name}
                        color={list.color}
                        event={handleDelIcon}
                    />
                ))}
            </div>
        </div>
    );
}

export default ListIconsContainer;