import React, { useState } from 'react';
import "./ToolsSection.css";
import AddListModal from '../../components/AddListModal/AddListModal';
import SearchBar from '../../components/SearchBar/SearchBar';

function ToolsSection() {

    

    // State for modal
    let [modal, setModal] = useState(false);
    let openCloseModal = () => {
        setModal(!modal)
    }

    return (
        <div className='tools-section'>
            <SearchBar></SearchBar>  

            <button className='create-list-button' onClick={openCloseModal}>Create a list</button>

            <AddListModal isOpen={modal} handleClick={openCloseModal} ></AddListModal>

            
        </div>
    );
}

export default ToolsSection;