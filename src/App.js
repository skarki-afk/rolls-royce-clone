import React,{useState} from 'react';
import Header from "./components/Header";
import Body from "./components/Body";
import dataBody from "./data/dataBody"
import Footer from "./components/Footer"
import dataFooter from "./data/dataFooter"
import styled from "styled-components"
import Sidebar from './components/Sidebar';
import Dealer from './components/Dealer';



function App() {
  
  const [btn,setBtn] = useState(false)
  const [btnLocat,setBtnLocat] = useState(false)
  const [menuOpen,setMenuOpen] = useState(false)
  const [openDeal, setOpenDeal] = useState(false)
  const toggleBtn =()=>{
    setMenuOpen(prevMenuOpen=> !prevMenuOpen);
  }
  const toggleDeal=()=>{
    setOpenDeal(prevOpenDeal=>!prevOpenDeal)
  }
  const showArrow =()=>{
    setBtn(prevBtn => !prevBtn)
  }
  const showLoca =()=>{
    setBtnLocat(prevBtnLocat => !prevBtnLocat)
  }
  const bodyElements = dataBody.map(items => {
    return ( 
      <Body
        key={items.id}
        title ={items.title}
        button ={items.button}
        description ={items.description}
        img = {items.img}
        h={items.h}
        btn={btn}
        showArrow={showArrow}
      />
    )
  })
  // console.log(menuOpen)
  const footerElements = dataFooter.map(items=> {
    return( 
      <Footer
        key={items.id}
        title={items.title}
        description={items.description}
        img={items.img}
        
      />
    )
  })
  
  return (
    <Section>   
      <Header 
        toggle ={toggleBtn}
        toggleDeal ={toggleDeal}
      />
      {bodyElements}
      <Footer
        showArrow={showArrow}
        btn={btn}/>
        
      <Sidebar 
        menuOpen={menuOpen}
        toggle={toggleBtn}
      />
      <Dealer
        btn={btn}
        showArrow={showArrow}
        showLoca={showLoca}
        btnLocat={btnLocat}
        openDeal ={openDeal}
        toggleDeal ={toggleDeal}
      />
    </Section>
  )
}

export default App;
const Section = styled.div`
  
`
