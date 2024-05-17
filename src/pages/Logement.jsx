import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Carousel from '../components/Carousel'
import TitleLocation from '../components/TitleAndLocation'
import Tags from '../components/Tags'
import Profile from '../components/Profile'
import Rating from '../components/Rating'
import Accordion from '../components/Accordion'
import Error from '../components/Error'



const LogementWrapper = styled.div`
  width: 90%;  
  margin: auto; 

`
const LogementContainer = styled.div`
  display: flex; 
  justify-content: space-between;
  
  @media (max-width: 767px) {   
    flex-direction: column;  
  }  
`
const ProfileContainer = styled.div`
  display: flex; 
  flex-direction: row-reverse; 
  justify-content: space-between;
`

const EquipmentContent = styled.ul`
  list-style: none; 
  padding-left: 0;
  margin-top: 0;  
`

const AccordionContainer = styled.div`
  display: flex;
  gap: 76px;  
  margin-bottom: 50px; 

  @media (max-width: 767px) {
    flex-direction: column; 
    gap: 20px; 
    margin-bottom: 30px;   
  }  
` 

const AccordionItem = styled.div`
  width: 50%; 

  @media (max-width: 767px) {
    width: 100%;     
  }  


`

function Logement() {
  const {id:queryId} = useParams()
  const [LocationData, setLocationData] = useState({})
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchLocation () {
      try {
        const response = await fetch (`http://localhost:8080/api/properties/${queryId}`)
        if (!response.ok) {
        throw new Error('Not Found');
      }
        const data = await response.json()
        setLocationData(data)
      } catch (error) { 
            console.error("error")
            setError (true)
      } 
  }
   fetchLocation ()
  }, [queryId])
  
    if (error) {
        return <Error/>
    }

    if (!LocationData.pictures) {
    return null;
  }
 
  return (
    <LogementWrapper>
      <Carousel images = {LocationData.pictures}
      /> 
      <LogementContainer> 
      <div> 
        <TitleLocation 
          title = {LocationData.title}
          location = {LocationData.location}
        />
       <Tags 
          tags = {LocationData.tags}
        />
      </div>
      <ProfileContainer> 
        <Profile
          name = {LocationData.host.name}
          picture = {LocationData.host.picture}
       />
        <Rating
         score = {LocationData.rating}      
       />
       </ProfileContainer>
       </LogementContainer> 
       
       <AccordionContainer>
        <AccordionItem>  
        <Accordion
         title = "Description"
         content = {LocationData.description}
        />
        </AccordionItem>
        <AccordionItem> 
        <Accordion
          title = "Équipements"
          content = {<EquipmentContent>
            {LocationData.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
            ))}
        </EquipmentContent>}
       />
       </AccordionItem>
       </AccordionContainer> 
    </LogementWrapper>
)
}

export default Logement;