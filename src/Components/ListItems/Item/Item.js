export default function Item({itemName, itemValue}){
    return(
        <div>
            <h1>{itemName}</h1>
            <h2>{itemValue}</h2>
            <input type="checkbox"/>
            <button>Delete</button>
        </div>
    );
}