import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import {useState,useEffect} from 'react'; 

function App() {
  const [restdata,setRestdata] = useState([])
  const url = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.704060&lng=77.102493&page_type=DESKTOP_WEB_LISTING"

  const getRestaurantData = async() => {
     const response = await axios.get(url);
     const data = await response.data.data;
     console.log('Data received', data)
     setRestdata(data)
     return data;
  }

useEffect( () => {
  getRestaurantData()

},[])
if(restdata){

  console.log(restdata)
}
  // API - https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lang=77.62448069999999&page_type=DESKTOP_WEB_LISTING
  return (
    <div className="App">
      <header />
    </div>
  );
}

export default App;
