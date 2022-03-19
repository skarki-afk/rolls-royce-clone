import React from 'react';
import Header from "./components/Header";
import Body from "./components/Body";
import dataBody from "./data/dataBody"
import { InsertComment } from '@mui/icons-material';


function App() {
  const bodyElements = dataBody.map(items => {
    return ( 
      <Body
        key={items.id}
        title ={items.title}
        button ={items.button}
        description ={items.description}
        img = {items.img}
      />
    )
  })
  return (
    <div>
      <Header/>
      {bodyElements}
    </div>
  )
}

export default App;
