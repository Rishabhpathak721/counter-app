import logo from "./logo.svg";
import "./App.css";
import { Provider, useSelector } from "react-redux";
import TimeCounter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <TimeCounter />
    </div>
  );
}

export default App;
