import React, { useState, useEffect } from 'react';
import "./ToolsSection.css";
import ListIconsContainer from '../../components/ListIconsContainer/ListIconsContainer';
import SearchBar from '../../components/SearchBar/SearchBar';

function ToolsSection() {
    


    return (
        <div className='tools-section'>
            {/* Passer la liste au composant SearchBar */}
            {/* <SearchBar data={list}></SearchBar>  */}

            {/* Passer `selectList` à ListIconsContainer */}
            <ListIconsContainer ></ListIconsContainer>

            {/* Bouton pour afficher la liste */}
            <button onClick={() => console.log("list")}>Afficher la liste</button>
        </div>
    );
}

export default ToolsSection;