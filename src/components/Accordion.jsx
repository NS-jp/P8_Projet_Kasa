import styled from 'styled-components'
import React, {useState} from 'react'; 
import ChevronUp from '../assets/Vector.png'

const AccordionWrapper = styled.div`
  background-color:#FF6060; 
  padding: 10px 20px 10px 15px;
  border-radius: 5px; 
  display:flex; 
  justify-content: space-between;

  @media (max-width: 767px) {   
    align-items: center; 
    padding: 5px; 
  }  
`

const AccordionTitle = styled.span`
  color:#FFFFFF; 
  font-size: 24px;  
  font-weight: 700;

  @media (max-width: 767px) {   
    font-size: 13px; 
  }  
`

const ImgRotate = styled.img`
  transform: rotate(180deg);
  max-width: 32px; 
  max-height: 32px;  
`
const AccordionImg = styled.span`
  font-size: 24px;

  @media (max-width: 767px) {   
    font-size: 13px; 
  } 
  
`

const AccordionContent = styled.div`
  background-color: #fafafa; 
  color: #000000;
  padding: 20px 20px 20px 15px;
  border-radius: 5px;  

  @media (max-width: 767px) {   
    font-size: 12px; 
  } 



`  


function Accordion({title, content}) {
  const [isActive, setIsActive] = useState(false);

  return (    
  <React.Fragment> 
    <AccordionWrapper onClick = {() => setIsActive(!isActive)}>
      <AccordionTitle>{title}</AccordionTitle>
      <AccordionImg>{isActive?  <ImgRotate src = {ChevronUp} alt="chevron down"/>: <img src = {ChevronUp} alt="chevron up"/>}</AccordionImg>
    </AccordionWrapper>
    {isActive && <AccordionContent>{content}</AccordionContent>}
  </React.Fragment>
  )
} 

export default Accordion;