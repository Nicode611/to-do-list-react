import React, { useState } from 'react';
import "./ToolsSection.css";
import ListIconsContainer from '../../components/ListIconsContainer/ListIconsContainer';
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
            {/* Passer la liste au composant SearchBar */}
            {/* <SearchBar data={listInfos}></SearchBar>   */}

            <button className='create-list-button' onClick={openCloseModal}>Créer une liste</button>

            <AddListModal isOpen={modal} handleClick={openCloseModal} ></AddListModal>

            {/* Passer `selectList` à ListIconsContainer */}
            <ListIconsContainer></ListIconsContainer>
        </div>
    );
}

export default ToolsSection;