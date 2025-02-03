import { useDispatch, useSelector } from 'react-redux';
import "./ListIconsContainer.css";
import ListIcon from './ListIcon/ListIcon';

import { delList } from '../../redux/slices/listsSlices';

function ListIconsContainer() {

    // State for the lists
    let lists = useSelector(state => state.lists.value)
    
    let dispatch = useDispatch();

    // Function to delete a list
    const handleDelIcon = (key) => {
        dispatch(delList(key))
        console.log(key)
    };

    return (
        <div className='lists-section'>
            <div className='list-icons-container'>
                {/* Lists render */}
                {lists.map((list) => (
                    <ListIcon
                        key={list.id}
                        uniqueKey={list.id}
                        name={list.name}
                        color={list.color}
                        event={handleDelIcon} 
                    />
                ))}
                <button onClick={() => {console.log(lists)}}>Voir la liste</button>
            </div>
        </div>
    );
}

export default ListIconsContainer;