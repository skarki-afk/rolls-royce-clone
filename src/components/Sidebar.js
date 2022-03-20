
import React from "react";
import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';
import { Fade } from "react-reveal";

const Sidebar =(props)=>{
    return(
        <Bar show = {props.menuOpen}>
            <Close onClick={props.toggle}/>
                <Fade left>
                <ul>
                    <li>inspiring greatness</li>
                    <li>models</li>
                    <li>bespoke</li>
                    <li>ownership</li>
                    <li>provenance</li>
                    <li>boutique</li>
                    <li>muse art programme</li>
                </ul>
                </Fade>

        </Bar>
    )
}
// console.log(Close.length)

export default Sidebar

const Bar = styled.div`
    z-index: 100;
    position:fixed;
    left:0;
    top:0;
    height: 100vh;
    width: 41vw;
    backdrop-filter: blur(10px);
    transform: ${props=> props.show? "translateX(0)" : "translate(-100%)"}; 
    transition: transform 0.3s ease-in;
    // background-color: transparent;
    ul{
        margin-right:100px;
        display:flex;
        flex-direction: column;
        text-align: end;
    }
    li{ 
        cursor: pointer;
        list-style: none;
        text-transform: uppercase;
        color: #e7e3e3;
        font-size: 1.3rem;
        margin-bottom: 20px;
        &:hover{
            color:#fff;
        }
    }
`

const Close = styled(CloseIcon)`
    color: #e7e3e3;
    margin: 15px;
    margin-bottom: 55px;
    &:hover{
        color: #fff;
    }
    cursor: pointer;
`