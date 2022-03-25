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
    color: #fff;
    height: 65vh;
    margin-left:45px;
    padding-top:45px;
    &:hover{
        color: #e7e3e3;
    }

    @media(max-width: 1180px){
        height: 45vh;
    }

    @media(max-width: 420px){
        height: 55vh;
    }

    @media(max-width: 400px){
        height: 70vh;
    }



    .modal{
        width:370px;
        margin-right:25px;
        border-left: 1px solid #fff;
        cursor: pointer;
        @media(max-width: 1340px){
            width: 500px;
        }
        @media(max-width: 1180px){
            width: 700px;
        }
        @media(max-width: 420px){
            width: 350px;
        }
        @media(max-width: 400px){
            width: 350px;
        }
    }

    .text{
        margin:0;
        height:150px;
        margin-left:15px;
        font-size: 0.9rem;
        line-height: 1.6;
        @media(max-width: 1340px){
            font-size: 1.2rem;
            height: 178px;
        }
        @media(max-width: 1180px){
            font-size:1.5rem;
            height: 220px;
        }
        @media(max-width: 420px){
            font-size: 0.8rem;
            height: 130px;
        }
    }
    img{
        object-fit: cover;
        @media(max-width: 1340px){
            width: 500px;
        }
        @media(max-width: 1180px){
            width: 700px;
        }
        @media(max-width: 420px){
            width: 390px;
        }
        @media(max-width: 400px){
            width: 360px;
        }
    }
    h4{
        text-transform: uppercase;
        font-weight:300;
        margin:0;
        font-size: 1.2rem;
    }
`