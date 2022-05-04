import '../App.css';
import React, { useEffect, useState,useRef } from 'react';
import axios from 'axios';
import CardContainer from "./CardContainer";
import NavBar from "./NavBar";
import Header from './Header';

const App = () => {
    const [data, setData] = useState([]);
 
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await axios.get("api/item");
    setData(response.data);
  }
  // fetchData()
  return (
    <div data-testid="main-app" className="App">
      <NavBar className="nav-bar" data={data} />
      <Header className="header" />
      <div className="board-container" data={data} >
        {data.map((element) => (
          <CardContainer data={element} key={element.id} update={fetchData}/>
        ))}
      </div>
    </div>
  );
};

export default App;
