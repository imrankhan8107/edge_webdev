import React, { Component } from 'react'
import axios from 'axios'
export default class NewComponent extends Component {
    //state is an reserved keyword in react, react takes the object from this state and initializes the internal states, whenever value of this state changes the whole component is rerendered 
    state = {
        count: 0,
        isLoading: true,
        data:[]
    }

    //componentDidMount is same as useEffect with empty dependency array
    async componentDidMount(){
        let res = await axios.get("API_URL");
        this.setState({data: res.data,isLoading:false});
    }

    myFunc() {
        console.log("object")
    }

  render() {
    return (
        <button onClick={()=>{
            this.setState({count: this.state.count + 1})
        }}>Class Based Component {this.state.count} {this.myFunc} => we always have to use this keyword to access variables or functions defined in class based component</button>
    )
  }
}