import {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {Loader} from '../utils/style/Atoms'

const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap:50px; 
    column-gap: 60px;  
    background-color: #F6F6F6; 
    margin-bottom: 60px; 
    padding: 50px;  

    @media (max-width: 767px) { 
    display: flex; 
    flex-direction: column;
    row-gap: 20px; 
    padding: 0;  
  }

`

const CardContainer = styled.div` 
    height: 340px;
    position: relative;   

    @media (max-width: 767px) { 
    height: 255px;   
  }

`

const CardImage =styled.img`
    width: 100%; 
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`

const CardTitle = styled.p`
    position: absolute;
    left: 20px; 
    top: 270px;
    font-size: 18px; 
    font-weight: 700; 
    color: #FFFFFF; 

    @media (max-width: 767px) { 
    height: 255px;
    top: 188px;    
    }

`



function Card () {
    const [LogementData, setLogementData] = useState([])
    const [isDataLoading, setDataLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
       async function fetchLogement () {
            setDataLoading(true)
            try {
                const response = await fetch (`http://localhost:8080/api/properties`)
                const data = await response.json()
                setLogementData(data)
            } catch (error) { 
            console.error("error")
            setError (true)
            } finally {
                setDataLoading(false)
            } 
        }
        fetchLogement()
    }, [])

    if (error) {
        return <span> Il y a eu un problème</span>
    }


    return (
        <CardWrapper>
            {isDataLoading? (
                <Loader/>
            ) : (
            LogementData.map((logement)=> (
                <CardContainer key = {logement.id}>
                    <Link to={`/logement/${logement.id}`} >
                        <CardImage src={logement.cover} alt="logement"/>
                        <CardTitle>{logement.title}</CardTitle>
                    </Link>    
            </CardContainer>
             ))
            )} 
        </CardWrapper>
    )    
        
}

export default Card 