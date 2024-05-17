import React, { useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../assets/LOGO.png'
 
const NavWrapper = styled.nav`
    padding: 40px;
    display: flex;
    width: 90%;
    margin: auto;  
    justify-content: space-between;
    align-items: center;

    @media (max-width: 767px) {
        padding: 20px; 
    }
`
const NavContainer = styled.div`
    display: flex; 
    gap: 50px;  
    
    @media (max-width: 767px) {
    gap: 20px; 
    }
`


const LogoImg = styled.img`
 @media (max-width: 767px) {
    max-width: 145px;
    }
`


const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 24px;
    font-weight: 500; 
    text-align: center;
    color:#000000;

    &.active{
        text-decoration: underline;
    }

    @media (max-width: 767px) {
        font-size: 12px; 
    }

`


function Header() {
    const [currentPage, setCurrentPage] = useState('')
    const location = useLocation(); 

    useEffect(()=>{
        if (location.pathname === '/'){
            setCurrentPage('accueil')
        } else if (location.pathname === '/about'){
            setCurrentPage('about') 
        } else {
            setCurrentPage('')
    }}, [location.pathname])

    return (
        <NavWrapper>
            <Link to="/">
                <LogoImg src = {Logo} alt="Logo kasa"/> 
            </Link>
            <NavContainer> 
                <StyledLink to="/" className={currentPage === 'accueil' ? 'active' : ''}>Accueil</StyledLink>
                <StyledLink to="/about" className={currentPage === 'about' ? 'active' : ''}>A Propos</StyledLink>
            </NavContainer>
        </NavWrapper>
    )
}

export default Header