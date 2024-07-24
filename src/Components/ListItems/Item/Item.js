export default function Item({itemName, itemValue, deleteItem}){
    return(
        <div>
            <h1>{itemName}</h1>
            <h2>{itemValue}</h2>
            <input type="checkbox"/>
            <button onClick={deleteItem}>Delete</button>
        </div>
    );
}