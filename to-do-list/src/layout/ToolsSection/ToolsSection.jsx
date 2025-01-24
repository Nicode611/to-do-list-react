import React, { useState } from 'react';
import BackPattern from "../../assets/images/BackPattern.webp";
import "./ToolsSection.css";
import ListIconsContainer from '../../components/ListIconsContainer/ListIconsContainer';
import AddListModal from '../../components/AddListModal/AddListModal';
import SearchBar from '../../components/SearchBar/SearchBar';

function ToolsSection() {

    // Infos de la liste crée
    let [listInfos, setListInfos] = useState([]);
    let stockListInfos = (newListInfos)=>{
        setListInfos(newListInfos)
    }

    // State for modal
    let [modal, setModal] = useState(false);
    let openCloseModal = () => {
        setModal(!modal)
        console.log(modal);
    }


    return (
        <div className='tools-section'>
            {/* Passer la liste au composant SearchBar */}
            {/* <SearchBar data={list}></SearchBar>  */}

            <button className='create-list-button' onClick={openCloseModal}>Créer une liste</button>

            <AddListModal isOpen={modal} handleClick={openCloseModal} listInfo={stockListInfos}></AddListModal>

            {/* Passer `selectList` à ListIconsContainer */}
            <ListIconsContainer listInfos={listInfos}></ListIconsContainer>
        </div>
    );
}

export default ToolsSection;