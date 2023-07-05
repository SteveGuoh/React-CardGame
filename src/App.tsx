import "./styles.css";
import Game from "./components/Game/Game";
import "./styles/global.scss";
import { Provider } from "react-redux";
import { store } from "../src/redux/index";

export default function App() {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  );
}
