import { Provider } from "react-redux";
import "./App.css";
import AddShop from "./components/AddShop";
import EditShopModal from "./components/EditShopModal";
import ShopList from "./components/ShopList";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <div className="">
        <AddShop />
        <ShopList />
        <EditShopModal />
      </div>
    </Provider>
  );
}

export default App;
