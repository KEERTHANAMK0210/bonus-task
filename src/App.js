import './App.css'
import React, { useState } from 'react';
import BarChart from './components/BarChart';
import {UserData} from './Data'
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';

function App() {
  const [userData,setUserData]=useState({
    labels:UserData.map((data)=>data.year),
    datasets:[{
      label:"User Gain",
      data:UserData.map((data)=>data.userGain),
      backgroundColor:[
        "rgba(75,192,192,1)",
        "#ecf0f1",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0",
      ],
      borderColor:"black",
      borderWidth:2,

    },]
  })
  return (
    <div className="App">

      <div className='row'>

      <div className="bchart-container">
        <h1>Bar Chart</h1>
      <BarChart chartData={userData} />
      </div>

      <div  className="lchart-container">
        <h1>Line Chart</h1>
      <LineChart chartData={userData} />
      </div>
      
      </div>



      <div className="pchart-container">
        <h1>Pie Chart</h1>
      <PieChart chartData={userData} />
      </div>

    </div>

  );
}

export default App;

