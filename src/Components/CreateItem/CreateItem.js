import { useContext, useState, useEffect } from "react";
import { Context } from "../../Context/Context";
import { toast } from "react-toastify";

export default function CreateItem(){

    
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const {items, setItems} = useContext(Context);
    
    useEffect(()=>{
        localStorage.setItem('listItems', JSON.stringify(items));
    }, [items]);
    
    function handleName(element){
        setName(element.target.value);
    }

    function handleQuantity(element){
        setQuantity(element.target.value);
    }

    function handleAdd(event){
        event.preventDefault();
        if(name !== '' && quantity > 0){
            const itemsObj = [
                {
                    itemName: name,
                    itemQuantity: quantity,
                }
            ];
            setItems([...items, ...itemsObj]);
            setName('');
            setQuantity(0);
        }

        toast.success("Sucess to create item!");
    }

    return(
        <div>
            <input type="text" placeholder="Item name" value={name} onChange={handleName} required/>
            <input type="number" placeholder="000" value={quantity || ''} onChange={handleQuantity} required/>
            <button onClick={handleAdd}>Add</button>
        </div>
    );
}