import { useContext, useEffect } from "react";
import { Context } from "../../Context/Context";
import Item from './Item/Item.js';
import { Link } from "react-router-dom";

export default function ListItems(){

    const {items, setItems} = useContext(Context);

    useEffect(()=>{
        const storageItems = localStorage.getItem('listItems');
        if(storageItems){
            const convertedItems = JSON.parse(storageItems);
            setItems(convertedItems);
        }
    },[]);

    useEffect(()=>{
        localStorage.setItem('listItems', JSON.stringify(items));
    }, [items]);

    function delItem(id){
        const updateList = items.filter((item, index) =>{
            return index !== id;
        });
        setItems(updateList);
    }

    return(
        <div>
            <Link to="/create">Create</Link>
            <div className="items">
                {items.map((item, id)=>{
                    return(
                        <Item key={id} itemName={item.itemName} itemValue={item.itemQuantity} deleteItem={() => delItem(id)}/>
                    )
                })}
            </div>
        </div>
    );
}