import React from 'react';
import { useState } from 'react';
import "./ToolsSection.css";
import ListIconsContainer from '../../components/ListIconsContainer/ListIconsContainer';
import SearchBar from '../../components/SearchBar/SearchBar';

function ToolsSection() {

  let [list, addToList] = useState([]);

  let selectList = (items) => {
    addToList(items);
    console.log(list)
  }


  return (
    <div className='tools-section'>
      <SearchBar data={list}></SearchBar> 
      <ListIconsContainer handleClick={selectList}></ListIconsContainer>
    </div>
  )
}

export default ToolsSection
