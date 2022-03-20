import React,{useState} from 'react';
import Header from "./components/Header";
import Body from "./components/Body";
import dataBody from "./data/dataBody"
import Footer from "./components/Footer"
import dataFooter from "./data/dataFooter"
import FooterSection from './components/FooterSection';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
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
      <FooterSection
        key={items.id}
        title={items.title}
        description={items.description}
        img={items.img}

      />
    )
  })
  
  return (
    <Section>
      <div className='hidden'>
        <Header 
          toggle ={toggleBtn}
          toggleDeal ={toggleDeal}
        />
        {bodyElements}
        <Footer/>
        <div className='footer-list'>
          <div className='list'>
            {footerElements}
          </div>
          <button 
          onMouseEnter={showArrow} 
          onMouseLeave={showArrow}className='btn'>inspiring greatness {btn && <RightArrow/>} </button>
        </div>
      </div>
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
const RightArrow = styled(ArrowRightAltIcon)`
    margin-left: 2px;
`