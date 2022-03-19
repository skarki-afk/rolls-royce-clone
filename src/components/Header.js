import React from "react";
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Header =()=>{
    return ( 
    <Nav>
        <Menu>
            <BurgerMenu/>Menu
        </Menu>
        <Logo>
            <img width="105px" alt="rolls-royce" src="./img/Rolls-Royce-RR.png"/>
        </Logo>
        <RightMenu className="right-menu">
           <Search className="search"/> Find a dealer
        </RightMenu>
    </Nav>
    )
}

export default Header

const Nav = styled.div`
    width: 97vw;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 0;
    text-transform: uppercase;
    border-bottom: 0.5px solid #fff;
    margin: 10px 17px;
    position: relative;
    font-weight:600;
    position: fixed;
    font-size: 0.9rem;
    z-index: 1;
    color: white;
`

const BurgerMenu = styled(MenuIcon)`
    margin-right: 15px;
`
const Menu = styled.div`
 display: flex;
 align-items: center;
 cursor: pointer;
`
const Logo =styled.div`
    cursor: pointer;
    object-fit: contain;
`
const RightMenu = styled.div`
    display: flex;
    cursor: pointer;
`

const Search = styled(SearchIcon)`
    
  }
`