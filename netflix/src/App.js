import './App.css';
import netflixBg from './images/bg.jpg';
import { NavBar, Body,Todos, Footer,Background } from './components';
import NewComponent from './components/NewComponent'

function App() {
  return (
    <div className="main">
      {/* <Background /> */}
      {/* we can have 3 components inside a parent element on a page: Header body and footer */}
      {/* <NavBar title={"Netflix"} logo="LOGO" />  */}
      {/* <NavBar></NavBar> can also work */}
      {/* <Body /> */}
      <Todos />
      {/* <Footer /> */}
      {/* <NewComponent /> */}
      
    </div>
  );
}

export default App;