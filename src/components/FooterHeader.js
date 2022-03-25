import React from "react";
import styled from "styled-components";


const FooterHeader =()=>{
    return(
        <Bottom>
            <Title>
                <h3>explore further</h3>
                <h4>continue your journey</h4>
            </Title>
        </Bottom>
    )
            
}

export default FooterHeader;

const Bottom =styled.div`
    position:relative;
    // background-color: #222;
    height: 35vh;
`
const Title = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    text-transform: uppercase;
    color: #fff;
    h3{
        font-size: 1.6rem;
        font-weight:400;
        padding-top: 145px;
        margin:0;
    }
    h4{
        font-weight:400;
        margin:8px 0 ;
        
    }
`

