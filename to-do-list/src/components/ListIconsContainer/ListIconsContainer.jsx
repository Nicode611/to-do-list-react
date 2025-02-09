import { useDispatch } from 'react-redux';
import "./ListIconsContainer.css";
import ListIcon from './ListIcon/ListIcon';

import { delList } from '../../redux/slices/listsSlices';

function ListIconsContainer({data}) {

    
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
                {data.map((list) => (
                    <ListIcon
                        key={list.id}
                        uniqueKey={list.id}
                        name={list.name}
                        color={list.color}
                        selected={list.selected}
                        event={handleDelIcon} 
                    />
                ))}
            </div>
        </div>
    );
}

export default ListIconsContainer;