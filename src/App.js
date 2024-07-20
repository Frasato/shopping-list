import CreateItem from "./Components/CreateItem/CreateItem.js";
import ListItems from "./Components/ListItems/ListItems.js";
import MyProvider from "./Context/Context.js";

export default function App() {
  return (
    <MyProvider>
      <CreateItem/>
      <ListItems/>
    </MyProvider>
  );
}
