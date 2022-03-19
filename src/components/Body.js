import React, {useState} from "react";
import styled from "styled-components";

const Body=(props)=>{
    return(
        <Section bg={props.img}>
            <Main>
                <h3>{props.title}</h3>
                {props.description && <p>{props.description}</p>}
            </Main>
            <Button>
                <button>{props.button}</button>
            </Button>
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
    overflow-y: none;
`
const Main = styled.div`
    margin: 95px 0 0 0;
    h3{
        font-size: 3.8rem;
        color: #fff;
        font-weight: 300;
        padding:15px 0;
    }
    p{
        color:#fff;
        text-align:center;
        padding:25px;
    }
`
const Button = styled.div`
    button {
        cursor: pointer;
        text-transform: uppercase;
        padding: 15px 75px;
        font-size: 12px;
        border-radius: 20px;
        border: none;
      }
`