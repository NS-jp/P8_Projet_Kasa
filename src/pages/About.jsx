import styled from 'styled-components'
import Banner from "../components/Banner"
import Accordion from "../components/Accordion"
import Image_banner_2 from '../assets/IMG_2.png'

const SectionWrapper = styled.div`
  display: flex; 
  flex-direction: column; 
  margin: auto;
  width: 90%;  
`

const AccordionContainer = styled.div`
  width: 80%;
  margin-right: auto;
  margin-left: auto; 
  margin-bottom: 30px; 
  
  @media (max-width: 767px) {   
    width: 100%; 
    margin-bottom: 20px; 
  }  



`

const AccordionData = [
  { 
    title: "Fiabilité", 
    content: `Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.` 
  }, 
  {
    title: "Respect", 
    content: `La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraîne exclusion de notre plateforme.`
  }, 
  {
    title: "Service",
    content: `La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraîne exclusion de notre plateforme.`
  }, 
  {
    title: "Sécurité",
    content: `La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestiques pour nos hôtes.`
  }
]



function About() {
  return (
    <SectionWrapper>
      <Banner
        image = {Image_banner_2}
        title = ""        
      />

      {AccordionData.map((accordion)=>(
        <AccordionContainer key = {accordion.title}>
          <Accordion 
          title = {accordion.title}
          content = {accordion.content}
          />
        </AccordionContainer>
      ))}
    </SectionWrapper>
  );
}

export default About;