import styled from 'styled-components'

const TitleContainer = styled.div`
  margin-bottom: 30px; 

  @media (max-width: 767px) {   
    margin-bottom: 10px;   
  }  

`

const TitleText = styled.h2`
  font-weight: 500;
  font-size: 36px;
  color: #FF6060;
  margin: 0;
  
  @media (max-width: 767px) {   
        font-size: 18px; 
        margin-bottom: 10px;   
  }  

`
const LocationContent = styled.p`
  margin: 0; 
  font-weight: 500; 

  @media (max-width: 767px) {   
        font-size: 14px;   
  }  
`

function TitleLocation ({title, location}) {
  return (
    <TitleContainer>
      <TitleText>{title}</TitleText> 
      <LocationContent>{location}</LocationContent>
    </TitleContainer>
  )
}

export default TitleLocation;