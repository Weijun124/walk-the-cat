
import '../App.css';
import React, {useEffect, useState } from 'react';
import axios from 'axios';
import CardContainer from "./CardContainer";

function App() {
  const [data, setData] = useState([]);
  
  useEffect(()=>{
    axios.get("/item").then(res => {
      setData([...data, res.data])
      console.log(res.data);
    })
  },[])
  if (!data) return null;
  return (
    <div className="App">
      {/* <NavBar className="navbar" data={} /> */}
      {/* <Header className="header" data={} /> */}
      <CardContainer className="card-container" data={data} /> 
    </div>
  );
}

export default App;