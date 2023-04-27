import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Todo from './Todo'
const API_URL = "https://jsonplaceholder.typicode.com/todos/"

export default function Todos() {
  const [isLoading, setisLoading] = useState(true);   // initially isLoading is true bcoz we are loading data in todo
    const [todos, settodos] = useState([]);
    const fetchData = async () => {
        // let res = await fetch(API_URL);
        // let data = await res.json();
        // console.log(data);

        // fetch(API_URL).then(async (res) => {
        //   const jsonRes = await res.json();
        //   console.log(jsonRes);
        // });

        // axios.get(API_URL).then((res) => {
        //   console.log(res.data);
        // });

        let res = await axios.get(API_URL);   // fetch method makes a get call to the API link provided
        settodos(res.data);
        setisLoading(false);   //data is loaded
        // console.log(res.data);   // whenever we get the response from API, print in in console
    }
    
    useEffect(()=>{fetchData()}, []);
    if(isLoading){
      return <p>Loading...</p>
    }
    else{
      return (
        <div className='todos'>
          {
            todos.map((todo,index) => {
              return <Todo key={index} todo={todo} />  //We made Todo as another component, using which we can apply any css to it and make it look better. We use props to pass data to Todo component
            })
          }
        </div>
      )
    }
}
