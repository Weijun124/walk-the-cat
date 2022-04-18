import '../App.css';
import React, {useEffect, useState } from 'react';
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
    const response = await axios.get("/item");
    setData(response.data);
  }

  return (
    <div className="App">
      <NavBar className="nav-bar" data={data}/>
      {/* <Header className="header" data={} /> */}
      {/* <NavBar className="navbar" data={} /> */}
      <Header className="header" />
      <div className="board-container">
      {data.map((element) => (
        <CardContainer data={element} key={element.id} />
      ))}
      </div>
    </div>
  );
};

export default App;
