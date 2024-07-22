import MyProvider from "./Context/Context.js";
import RoutesShop from "./routes.js";

export default function App() {
  return (
    <MyProvider>
      <RoutesShop/>
    </MyProvider>
  );
}
