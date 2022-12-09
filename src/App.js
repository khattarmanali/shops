import { Provider } from "react-redux";
import "./App.css";
import AddShop from "./components/AddShop";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <div className="">
        <AddShop />
      </div>
    </Provider>
  );
}

export default App;
