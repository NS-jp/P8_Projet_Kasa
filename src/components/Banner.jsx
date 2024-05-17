import styled from 'styled-components'

const  BannerContainer = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: center; 
    height: 223px;
    position: relative;
    margin-bottom: 60px;  
    border: 1px solid #000000; 
    box-shadow: 0px 4px 4px 0px #00000040;
    border-radius: 25px;
    background-color: rgba(0, 0, 0, 0.5); 
  
  @media (max-width: 767px) { 
  height: 111px; 
  justify-content: flex-start; 
  margin-bottom: 20px; 
  }

`

const BannerImage = styled.img`
    position: absolute; 
    width: 100%; 
    height: 100%;
    z-index: -1;
    object-fit: cover;
    border-radius: 25px;  
`

const BannerTitle = styled.h1`
  font-size: 48px;
  color: #FFFFFF; 
  
  @media (max-width: 834px) { 
    font-size: 24px;
    padding-left: 20px;  
  }  
`

function Banner ({image, title}){
  return (
    <BannerContainer>
        <BannerImage src = {image} alt = "banner"/>
        <BannerTitle>{title}</BannerTitle>   
    </BannerContainer>
  )
}


export default Banner