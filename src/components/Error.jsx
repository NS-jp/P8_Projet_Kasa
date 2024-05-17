import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Error404 from '../assets/404.png'


const ErrorWrapper = styled.div`
    margin-top: 60px;
    margin-left: auto; 
    margin-right: auto;
    width: 90%; 
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ErrorImage = styled.img`
  max-width: 800px;
  margin-bottom: 80px;
  
  @media (max-width: 767px) {   
    max-width: 198px;
  }  
  

`

const ErrorSubtitle = styled.h2`
  font-weight: 500;
  font-size: 36px;
  color: #FF6060;
  margin-bottom: 60px;

  @media (max-width: 767px) {   
    font-size: 18px;  
    text-align: center; 
  }  

`

const ErrorLink = styled(Link)`
    font-size: 18px;
    font-weight: 500; 
    color:#000000;
    margin-bottom: 80px; 

  @media (max-width: 767px) {   
    font-size: 14px;  
  }  
`

const ErrorText = styled.span`
  @media (max-width: 767px){
    display: block;   
  }   
`

function Error() {
  return (
    <ErrorWrapper>
      <ErrorImage src = {Error404} alt = "error404" />
      <ErrorSubtitle>
        <ErrorText>Oups! La page que</ErrorText><ErrorText>vous demandez n'existe pas.</ErrorText>
      </ErrorSubtitle>
      <ErrorLink to = "/">
            <p>Retourner sur la page d'accueil</p>
        </ErrorLink>
    </ErrorWrapper>
  )
}

export default Error