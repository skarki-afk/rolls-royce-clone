import React from "react";
import styled from "styled-components";


const Footer =()=>{
    return(
        <Bottom>
            <Title>
                <h3>explore further</h3>
                <h4>continue your journey</h4>
            </Title>
        </Bottom>
    )
            // <Button>
            //     <button>Inspiring Greatness</button>
            // </Button>
}

export default Footer;

const Bottom =styled.div`
    position:relative;
    background-color: #222;
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
const Button = styled.div`
    padding:93vh;
    button{
        text-transform: uppercase;
    }
`
// const Modal =styled.div`
//     display: flex;
//     flex-direction: row;
//     color: #fff;
//     margin-left:45px;
//     padding-top:45px;
//     .modal{
//         width:350px;
//         margin-right:25px;
//         border-left: 1px solid #fff;
        
//     }
//     .text{
//         margin:0;
//         height:145px;
//         margin-left:15px;
//     }
//     img{
//         object-fit: cover;
        
//     }
//     h4{
//         text-transform: uppercase;
//         font-weight:300;
//         margin:0;
//         font-size: 1.2rem;
//     }
//     p{
        
//     }
// `