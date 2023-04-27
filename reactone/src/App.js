// import logo from './logo.svg';
import './App.css';
// import NavigationBar from './components/navigation.js'

import Icon from './Icon'  //we can see Icon55 isn't present in the Icon.js file, but we can import it here; it we can name anything we want here for default exports



function App() {
  // const listOfIcons = ["Imran","Sunny","Jerrin","Abc"];
  // const name = "Imran";
  return (
    <>
    <Icon name="Imran" />
    {/* <NavigationBar />
    <hr /> */}
    </>
  );
}

export default App;
