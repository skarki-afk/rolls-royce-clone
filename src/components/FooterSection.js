import React from "react";
import styled from "styled-components"
import Fade from "react-reveal/Fade";

const FooterSection =(props)=>{
    return(
    
    <Modal>
        <Fade bottom>
            <div className="modal">
                <img width="410px" height="350px" src={`./img/${props.img}`}/>
                <div className="text">
                    <h4>{props.title}</h4>
                    <p>{props.description}</p>
                </div>
            </div>
        </Fade>
    </Modal>
    )
}

export default FooterSection;

const Modal =styled.div`
    position:relative;
    background-color: #222;
    color: #fff;
    margin-left:45px;
    padding-top:45px;
    .modal{
        width:370px;
        margin-right:25px;
        border-left: 1px solid #fff;
        cursor: pointer;
    }
    .text{
        margin:0;
        height:150px;
        margin-left:15px;
        font-size: 0.9rem;
        line-height: 1.6;
    }
    img{
        object-fit: cover;
    }
    h4{
        text-transform: uppercase;
        font-weight:300;
        margin:0;
        font-size: 1.2rem;
    }
    p{
        
    }
`