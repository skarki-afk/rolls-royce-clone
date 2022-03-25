import React from "react";
import styled from "styled-components";
import FooterHeader from "./FooterHeader";
import FooterSection from "./FooterSection";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import dataFooter from "../data/dataFooter";



const Footer =(props)=>{
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
        console.log(props.btn)
    return(
        <Container>
            <FooterHeader />
            <FooterList>
                <List>
                {footerElements}
                </List>
                <Button 
                    onMouseEnter={props.showArrow} 
                    onMouseLeave={props.showArrow}
                    className='btn'
                    >
                        inspiring greatness 
                        {props.btn && <RightArrow/>} 
                </Button>
            </FooterList> 
        </Container>
    )
            
}

export default Footer;


 const Container = styled.div` 
    background-color: #222;
    height: 100vh;
    width: auto;
    @media (max-width: 1340px) {  
        height: 160vh;   
    }
 `

 const RightArrow = styled(ArrowRightAltIcon)`
  margin-left: 2px;
`
  const FooterList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: space-around;
  background-color: #222;
  overflow-x: hidden;
  margin-top: 20px;
  `

  const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3,  minmax(100px, 1fr));
  margin-left: -55px;
  overflow: none;
  @media (max-width:1340px ){
    grid-template-columns: repeat(2,  minmax(100px, 1fr));
    margin-left:-35px;
    gap: 80px;
  }
  @media (max-width: 1180px ){
    grid-template-columns: repeat(1,  minmax(100px, 1fr));
    gap:0px;
  }
  @media (max-width: 420px ){
    margin-left: -60px;
  }
  @media (max-width: 400px ){
    margin-left: -38px;
  }

  `
  const Button= styled.button`
  margin-top: 155px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-transform: uppercase;
  height: 45px;
  width: 260px;
  font-size: 12px;
  border-radius: 40px;
  border: none;
  box-sizing: border-box;
  text-align: center;
  background-color: #fff;
  &:hover{
    background-color: #e7e3e3;
  transition: all 0.3s ease-in;
  }
  `