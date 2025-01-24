import React, { useState,useEffect, useRef } from 'react';
import "./ListIconsContainer.css";
import ListIcon from './ListIcon/ListIcon';

function ListIconsContainer( {listInfos} ) {
    
    const [lists, setLists] = useState([]); // State for lists
    const idCounter = useRef(0); // Count for IDs

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
            return updatedLists;
        });
    };

    // Callback function to add list when infos are received
    useEffect(() => {
        if (listInfos.length !== 0) {
            handleAddIcon(listInfos)
        }
    }, [listInfos])


    return (
        <div className='lists-section'>
            <div className='list-icons-container'>
                {/* Lists render */}
                {lists.map((list) => (
                    <ListIcon
                        key={list.key} // Unique ID for each elements
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