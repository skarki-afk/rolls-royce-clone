import React, {useState} from "react";
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Header =(props)=>{
    const [scroll,setScroll] = useState(false)
    const scrollChange =()=>{
        if(window.scrollY >= 75){
            setScroll(true)
        }else{
            setScroll(false)
        }
        // console.log(window.scrollY)
    }
    window.addEventListener('scroll', scrollChange)
    
    
    return ( 
    <Nav>
        <div className={scroll? "active":"nav"}>
        <Menu onClick={props.toggle}>
            <BurgerMenu />Menu
        </Menu>
        <Logo>
            <img width={scroll? "40px" : "105px"} alt="rolls-royce" src={scroll? "./img/brandlogo.png" : "./img/Rolls-Royce-RR.png"}/>
        </Logo>
        <RightMenu 
        onClick={props.toggleDeal}
        className="right-menu">
           <Search className="search"/> Find a dealer
        </RightMenu>
        </div>
    </Nav>
    )
}

export default Header

const Nav = styled.div`
    z-index: 1;
    .active {
        height: 55px;
        width: 98vw;
        display:flex;
        margin: 0 5px;
        justify-content: space-between;
        align-items: center;
        position:fixed;
        text-transform: uppercase;
        background: transparent;
        backdrop-filter: blur(5px);
        font-weight:600;
        font-size: 0.9rem;
        z-index: 1;
        color: white;
    }
    .nav{
        width: 96vw;
        height: 75px;
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding: 18px 0;
        text-transform: uppercase;
        border-bottom: 0.5px solid #fff;
        margin: 10px 17px;
        font-weight:600;
        position: fixed;
        font-size: 0.9rem;
        z-index: 1;
        color: white;
    }
    
`

const BurgerMenu = styled(MenuIcon)`
    margin-right: 15px;
`
const Menu = styled.div`
 display: flex;
 align-items: center;
 cursor: pointer;
 &:hover{
    color:#e7e3e3;
    transition: all 0.3s ease-in;
}
`
const Logo =styled.div`
    cursor: pointer;
    object-fit: contain;
`
const RightMenu = styled.div`
    display: flex;
    cursor: pointer;
    &:hover{
        color:#e7e3e3;
        transition: all 0.3s ease-in;
    }
`

const Search = styled(SearchIcon)`
    
  }
`