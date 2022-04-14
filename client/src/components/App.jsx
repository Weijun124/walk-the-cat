
import '../App.css';
import React, {useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [data, setData ] = useState(null)
  // const [title, setTitle] = useState(null)
  
  
  useEffect(()=>{
    axios.get("/item").then(res => {
      setData(res.data)
      console.log(data);
    })
  },[])
  if (!data) return null;
  return (
    <div className="App">
    {/* {data.map(card =>{
      <p key={card.id}>its working {card.title}</p>

    })} */}
    <p>{data[0].title}</p>
    </div>
  );
}

export default App;