import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Items, About,Posts } from "./pages";
import { NavBar, Cart } from "./Components";

//home
//about
//items page

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/items/:category" element={<Items />} />
          <Route path='/posts' element={<Posts />} />
        </Routes>
      </BrowserRouter>
      <Cart />
    </div>
  );
}

export default App;
