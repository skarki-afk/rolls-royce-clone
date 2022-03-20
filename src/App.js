import React,{useState} from 'react';
import Header from "./components/Header";
import Body from "./components/Body";
import dataBody from "./data/dataBody"
import Footer from "./components/Footer"
import dataFooter from "./data/dataFooter"
import FooterSection from './components/FooterSection';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import styled from "styled-components"




function App() {
  
  const [btn,setBtn] = useState(false)
  const showArrow =()=>{
    setBtn(prevBtn => !prevBtn)
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
    <div>
      <Header />
      {bodyElements }
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
  )
}

export default App;

const RightArrow = styled(ArrowRightAltIcon)`
    margin-left: 2px;
`