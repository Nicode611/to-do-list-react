import React, { useState, useEffect } from 'react';
import "./ToolsSection.css";
import ListIconsContainer from '../../components/ListIconsContainer/ListIconsContainer';
import SearchBar from '../../components/SearchBar/SearchBar';

function ToolsSection() {
    // État pour la liste
    let [list, addToList] = useState([]);

    // Fonction pour mettre à jour la liste
    let selectList = (item) => {
        addToList((prevItems) => [...prevItems, item]); // Ajoute la chaîne comme un nouvel élément
        console.log("Item ajouté :", item); // Affiche l'élément ajouté
    };

    // Observer les changements dans `list`
    useEffect(() => {
        console.log("List updated:", list); // Affiche la liste mise à jour
    }, [list]); // Déclenché à chaque fois que `list` change

    return (
        <div className='tools-section'>
            {/* Passer la liste au composant SearchBar */}
            {/* <SearchBar data={list}></SearchBar>  */}

            {/* Passer `selectList` à ListIconsContainer */}
            <ListIconsContainer handleClick={selectList}></ListIconsContainer>

            {/* Bouton pour afficher la liste */}
            <button onClick={() => console.log(list)}>Afficher la liste</button>
        </div>
    );
}

export default ToolsSection;