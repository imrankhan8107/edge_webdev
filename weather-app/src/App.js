import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LeftPane from "./components/LeftPane";
import MiddlePane from "./components/MiddlePane";
import RightPane from "./components/RightPane";
// import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <LeftPane />
      <MiddlePane />
      <RightPane />
    </div>
  );
}

export default App;
