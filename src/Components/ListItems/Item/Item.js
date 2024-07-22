export default function Item(props){
    return(
        <div>
            <h1>{props.itemName}</h1>
            <h2>{props.itemValue}</h2>
            <input type="checkbox"/>
            <button>Delete</button>
        </div>
    );
}