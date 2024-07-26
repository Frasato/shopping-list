import { FaTrash } from "react-icons/fa";
import "../../../styles/items.css";

export default function Item({itemName, itemValue, deleteItem}){
    return(
        <div className="items-container">
            <h1 className="name-item">{itemName}</h1>
            <h2 className="item-value">{itemValue}</h2>
            <input type="checkbox" className="check-item"/>
            <button onClick={deleteItem} className="delete-item"><FaTrash /></button>
        </div>
    );
}