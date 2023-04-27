import { useState } from "react";
import "./App.css";
import { NavBar, MovieList } from "./components";
import axios from "axios";

const API_BASE_URL = "https://www.omdbapi.com";
// &apikey=9774ffe

function App() {
  // const [dataVar, helperFunction] = useState(<Initializer>)
  const [isLoading, setisLoading] = useState(false);
  const [Movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState(""); // inputValue is used to store the value of the input field in navbar. We send them using props,  props is a way to pass data or reference of functions from parent to child
  const [page, setPage] = useState(1);

  const search = async (e) => {
    console.log(e);
    if (e.code === "Enter" || e.type === "click") {
      console.log(inputValue, "<- this is our search term and page is", page);
      // fetch data
      setisLoading(true);
      let response = await axios.get(
        //https://www.omdbapi.com/?s=avatar&page=2&apikey=9774ffe
        API_BASE_URL + "/?s=" + inputValue + "&page=" + page + "&apikey=9774ffe"
      );
      setisLoading(false);
      // console.log(response.data.Search, "<- this is our data from api");
      // Set data
      setMovies(response.data.Search);
      // console.log(page);
    }
  };
  return (
    <div className="main">
      <NavBar
        search={search}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
      <MovieList
        isLoading={isLoading}
        movieList={Movies}
        page={page}
        setPage={setPage}
        search={search}
      />
      {/* {isLoading ? <h1>Loading...</h1> : <h1>Not Loading</h1>} */}
    </div>
  );
}

export default App;
