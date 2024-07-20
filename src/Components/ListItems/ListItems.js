import { useContext } from "react";
import { Context } from "../../Context/Context";

export default function ListItems(){

    const {item, number} = useContext(Context);

    return(
        <div>
            <h1>{item}</h1>
            <h2>{number}</h2>
            <input type="checkbox"/>
            <button>Delete</button>
        </div>
    );
}