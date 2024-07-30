import { useContext, useState, useEffect } from "react";
import { Context } from "../../Context/Context";
import { toast } from "react-toastify";
import { IoIosAddCircle } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";

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
        <div className="continar-items">
            <Link to="/" className="back-button"><FaArrowLeft />Home</Link>
            <input type="text" placeholder="Item name" value={name} onChange={handleName} className="name-item" required/>
            <input type="number" placeholder="000" value={quantity || ''} onChange={handleQuantity} className="quant-item" required/>
            <button onClick={handleAdd} className="add-item"><IoIosAddCircle /></button>
        </div>
    );
}