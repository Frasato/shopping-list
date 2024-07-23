import { useContext } from "react";
import { Context } from "../../Context/Context";
import Item from './Item/Item.js';
import { Link } from "react-router-dom";

export default function ListItems(){

    const {items} = useContext(Context);

    return(
        <div>
            <Link to="/create">Create</Link>
            <div className="items">
                {items.map((item, id)=>{
                    return(
                        <Item key={id} itemName={item.itemName} itemValue={item.itemQuantity}/>
                    )
                })}
            </div>
        </div>
    );
}