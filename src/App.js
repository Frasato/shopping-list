import { ToastContainer } from "react-toastify";
import MyProvider from "./Context/Context.js";
import RoutesShop from "./routes.js";

import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <MyProvider>
      <ToastContainer autoClose={3000}/>
      <RoutesShop/>
    </MyProvider>
  );
}
