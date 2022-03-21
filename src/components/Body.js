import React, {useState,useEffect} from "react";
import styled from "styled-components";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Fade from 'react-reveal/Fade';

const Body=(props)=>{

    const [isVisible,setIsVisible] = useState(true)
    
    const listenToScroll = () => {
        let heightToHideFrom = 1734;
        const winScroll = document.body.scrollTop || 
            document.documentElement.scrollTop;
           
        if (winScroll > heightToHideFrom) { 
           isVisible &&              
             setIsVisible(false);
        } else {
             setIsVisible(true);
        }  
      };
      useEffect(() => {   
        window.addEventListener("scroll", listenToScroll);
        return () => 
           window.removeEventListener("scroll", listenToScroll); 
      }, [])
    return(
        <Section bg={props.img}>
            <Fade bottom>
                <Main>
                    <h3 id= {props.h}>{props.title}</h3>
                    {props.description && <p>{props.description}</p>}
                </Main>
            </Fade>
            <Fade bottom>
                <Button 
                onMouseEnter={props.showArrow} 
                onMouseLeave={props.showArrow}>
                    <button>{props.button} {props.btn && <RightArrow/>}</button>
                </Button>
            </Fade>
            {isVisible && <Levels >
                    <a href="#h1">
                <div className="dots">

                    </div>
                    </a>
                    <a href="#h2">
                <div className="dots">

                    </div>
                    </a>
                    <a href="#h3">
                <div className="dots">

                    </div>
                    </a>
            </Levels>}
        </Section>
    )
}

export default Body;

const Section = styled.div`
    height: 88vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${(props)=> `url(/img/${props.bg})`};
    display:flex;
    flex-direction:column;
    align-items:center;
    padding: 45px;
    text-transform: uppercase;
    
`
const Main = styled.div`
    margin: 95px 0 0 0;
    h3{
        font-size: 5.5rem;
        color: #fff;
        font-weight: 300;
        padding: 65px 0 15px 0;
        margin: 0 0 15px 0;
    }
    p{
        color:#fff;
        text-align:center;
        padding:45px;
    }
`
const Button = styled.div`
    button {
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
        background-color: #FFF;
    }
    button:hover{
        background-color: #e7e3e3;
        transition: all 0.3s ease-in;

    }
`
const RightArrow = styled(ArrowRightAltIcon)`
    margin-left: 2px;
`
const Levels= styled.div`
    position: fixed;
    top: 45%;
    left: 20px;
    .dots{
        height: 5px;
        width:5px;
        border-radius: 50%;
        background-color: gray;
        margin-top: 20px;
    }
`