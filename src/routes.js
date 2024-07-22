import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Create from "./Pages/Create";

export default function RoutesShop(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/create" element={ <Create/> }/>
            </Routes>
        </BrowserRouter>
    );
}