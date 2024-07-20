import { useContext, useState } from "react";
import { Context } from "../../Context/Context";

export default function CreateItem(){

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState();
    const {setItem} = useContext(Context);
    const {setNumber} = useContext(Context);

    function handleName(element){
        setName(element.target.value);
    }

    function handleQuantity(element){
        setQuantity(element.target.value);
    }

    function handleAdd(){
        setItem(name);
        setNumber(quantity);
    }

    return(
        <div>
            <input type="text" placeholder="Item name" value={name} onChange={handleName} required/>
            <input type="number" placeholder="000" value={quantity} onChange={handleQuantity} required/>
            <button onClick={handleAdd}>Add</button>
        </div>
    );
}