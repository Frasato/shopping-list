import { Link } from 'react-router-dom';
import CreateItem from '../Components/CreateItem/CreateItem.js';

export default function Create(){
    return(
        <div>
            <Link to="/">Home</Link>
            <CreateItem/>
        </div>
    );
}