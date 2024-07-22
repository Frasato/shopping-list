import { useContext } from "react";
import { Context } from "../../Context/Context";
import Item from './Item/Item.js';

export default function ListItems(){

    const {items} = useContext(Context);

    return(
        <div>
            {items.map((item, id)=>{
                return(
                    <Item key={id} itemName={item.itemName} itemValue={item.itemQuantity}/>
                )
            })}
        </div>
    );
}