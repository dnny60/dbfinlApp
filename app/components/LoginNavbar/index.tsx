import React from 'react'
import {FaBars} from 'react-icons/fa'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon,
    NavMenu,
    NavItem, 
    NavLinks , 
    NavBtn, 
    NavBtnLink
} from './NavbarElement'



const Navbar = ({ toggle }) => {
    
  return (
    <>
      <Nav>
        <NavbarContainer>
            <NavLogo to='/'>CarryU</NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon >
            <NavMenu>
        
                <NavItem>
                    <NavLinks to="/discover" >Discover</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="/service" >Services</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="/" >Log out</NavLinks>
                </NavItem>
                
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signin"></NavBtnLink>
            </NavBtn>
            
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
