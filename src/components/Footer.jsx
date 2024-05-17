import styled from 'styled-components'
//import Footer_text from '../assets/Footer_text.png'
import Footer_logo from '../assets/Footer_logo.png'

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 0;
    background-color: black;
    row-gap: 50px;
    
  @media (max-width: 767px) {   
    row-gap: 20px;    
  } 
`

const FooterText = styled.span`
  color: #FFFFFF; 
  font-size: 24px; 
  
  @media (max-width: 767px) {   
    font-size: 12px; 
    width: 30%; 
    text-align: center;
  } 

`

function Footer() {
  return (
    <FooterContainer>
        <img src = {Footer_logo} alt = "Footer logo"/>
        <FooterText>© 2020 Kasa. All rights reserved</FooterText>
    </FooterContainer>
  )
}

export default Footer