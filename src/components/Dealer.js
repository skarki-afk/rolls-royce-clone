import React from "react";
import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';

const Dealer=(props)=>{
    return(
        <Section show={props.openDeal}>
            <Nav>
                <Close onClick={props.toggleDeal}/>
            </Nav>
            <Body>
                <h3>find a dealer</h3>  
                <p>You will  be directed to the page of our authorised dealers. Rolls-Royce Motor Cars Limited accepts no liability or responsibility for the information, views, or opinions contained therein.</p>
                <input type="text" placeholder="Search by country, region or city"/>
                <Button>
                    <button 
                    onMouseEnter={props.showArrow} 
                    onMouseLeave={props.showArrow}
                    className="butn butn-search">
                        search
                        {props.btn && <RightArrow/>}
                    </button>
                    <button 
                     onMouseEnter={props.showLoca} 
                     onMouseLeave={props.showLoca}
                    className="butn butn-location">
                        use my location
                        {props.btnLocat && <Location/>}
                    </button>
                </Button>
            </Body>
        </Section>
    )
}

export default Dealer;
const Section= styled.div`
    z-index: 999;
    position:fixed;
    top:0;
    transform: ${props => props.show? "translateY(0)": "translateY(100%)"};
    transition: transform 0.3s ease-in; 
    overflow-y: hidden;
`
const Nav = styled.div`
    height: 13vh;
    width: 100vw;
    background-color:#1b0d2e;
    color: #fff;
    display:flex;
    justify-content: center;
    align-items: center;
    overflow-Y: none
`
const Close = styled(CloseIcon)`
    cursor: pointer;
    font-size: 1.2rem;
`

const Body = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items:center;
    height: 87vh;
    background-color: #281432;
    padding: 45px;
    h3{
        margin:0;
        font-size: 2.5rem;
        font-weight: 400;
        color: #fff;
        text-transform: uppercase;
    }
    p{  
        width: 415px;
        color: #fff;
        font-size:0.9rem; 
        text-align: center;
        margin: 25px 0 55px 0;
    }
    input{
        padding: 15px 0;
        width: 400px;
        border: none;
        outline: none;
    }

`
const Button = styled.div`
    padding: 30px;
    display:flex;
    flex-direction: column;
    .butn-location{
        background-color: transparent;
        border: 1px solid #6d30a7;
    }    
    .butn{
        margin: 5px;
        text-transform: uppercase;
        height:45px;
        width: 260px;
        border-radius: 40px;
        color: #fff;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .butn-search{
        background-color:#6d30a7;
        border: none;
        
        text-align:center;
    }
       
`
const RightArrow = styled(ArrowRightAltIcon)`
    margin-left: 2px;
`
const Location = styled(LocationSearchingIcon)`
    margin-left:2px;
`