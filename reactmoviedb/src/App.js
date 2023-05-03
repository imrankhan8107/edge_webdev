import { useState } from "react";
import "./App.css";
import { NavBar } from "./components";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Movie from "./pages/Movie";
import About from "./pages/About.js";
import MovieDetails from "./pages/MovieDetails";

const API_BASE_URL = "https://www.omdbapi.com";
// &apikey=9774ffe

/*
react is a single page app
we only req for html page once from server; after receiving html page, other logic to change the url and show user what the url renders is carried out by the frontend library
all the manipulation of url, navigating user throughout website, etc. are dependent in frontend

Every component that needs to be changed based on the route comes in the router folder
Router is Parent, and every child can access the history popped to it
BrowserRouter is imported as Router from react-router-dom, 
 */
function App() {
  // const [dataVar, helperFunction] = useState(<Initializer>)
  const [isLoading, setisLoading] = useState(false);
  const [Movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState(""); // inputValue is used to store the value of the input field in navbar. We send them using props,  props is a way to pass data or reference of functions from parent to child
  const [page, setPage] = useState(1);

  const search = async (e) => {
    console.log(e);
    if ((e.code === "Enter" || e.type === "click") && inputValue !== "") {
      if (inputValue.length < 3) {
        alert("Please enter atleast 3 characters");
        return;
      }
      {
        console.log(inputValue, "<- this is our search term and page is", page);
        // fetch data
        setisLoading(true);
        let response = await axios.get(
          //https://www.omdbapi.com/?s=avatar&page=2&apikey=9774ffe
          API_BASE_URL +
            "/?s=" +
            inputValue +
            "&page=" +
            page +
            "&apikey=9774ffe"
        );
        setisLoading(false);
        console.log(response.data, "<- this is our data from api");
        // Set data
        if(response.data.Search){
          setMovies(response.data.Search);
        }
        // setMovies(response.data.Search);
        // console.log(page);
      }
    }
  };
  return (
    <div className="main">
      <Router>
        <Routes>
          <Route
            path="/movie-list"
            element={
              <>
                <NavBar
                  search={search}
                  setInputValue={setInputValue}
                  inputValue={inputValue}
                />
                <Movie
                  isLoading={isLoading}
                  movieList={Movies}
                  page={page}
                  setPage={setPage}
                  search={search}
                  API_BASE_URL={API_BASE_URL}
                />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/"
            element={
              <Home
                search={search}
                setInputValue={setInputValue}
                inputValue={inputValue}
                Movies={Movies}
                setMovies={setMovies}
              />
            }
          />
          {/* to create a dynamic routing, we use a colon followed by something(imdbID in this case). this something is variable
           whenever we see a ":" before a word, we know that it is dynamic routing.
           in path we use colon for the part(colon to next slash) which is variable 
          */}
          {/* <Route path="/movie-list/:imdbID" element={<MovieDetails />} /> */}
          <Route path="/movie-list/:id" element={<MovieDetails />} />
        </Routes>
      </Router>

      {/* {isLoading ? <h1>Loading...</h1> : <h1>Not Loading</h1>} */}
    </div>
  );
}

export default App;
