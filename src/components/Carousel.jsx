import { useState } from 'react'
import styled from 'styled-components'
import ArrowForward from '../assets/arrow_forward.png'
import ArrowBack from '../assets/arrow_back.png'

const CarouselContainer = styled.div`
    display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 415px;
	position: relative;
    margin-bottom: 30px; 

    @media (max-width: 767px) {   
    height: 255px; 
  } 

`
const SlideImage = styled.img`
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: -1;
	object-fit: cover;
	object-position: center;
    border-radius: 25px; 
`
const ArrowBackImage = styled.img`
    position:absolute; 
    left: 10px; 
    
    @media (max-width: 767px) {   
        width: 24px;
        height: 24px;   
  } 

`
const ArrowForwardImage = styled.img`
    position:absolute; 
    right: 10px;
    
    @media (max-width: 767px) {   
        width: 24px;
        height: 24px;   
  } 
`

const SlideIndicator = styled.span`
    position: absolute;
	bottom: 30px;
    color:#FFFFFF; 

    @media (max-width: 767px) {   
        display: none;   
  } 
    
    

`

function Carousel ({images}){
    const [currentIndex, setCurrentIndex] = useState(0)

    const goToPreviousSlide = () => {
        const PreIndex = currentIndex === 0? images.length - 1 : currentIndex - 1 
        setCurrentIndex (PreIndex)
    }

    const goToNextSlide = () => {
        const NextIndex = currentIndex === images.length-1 ? 0 : currentIndex + 1 
        setCurrentIndex (NextIndex)
    }

    if (!images || images.length === 0) {
    return null;
    }

    return(
        <CarouselContainer>
            <SlideImage src ={images[currentIndex]} alt="first slide"/>
            {images.length > 1 && (
                <>
                <ArrowBackImage src = {ArrowBack} alt ="Arrow back" onClick= {goToPreviousSlide}/>
                <ArrowForwardImage src = {ArrowForward} alt="Arrow forward" onClick = {goToNextSlide}/>
                <SlideIndicator> {`${currentIndex + 1} / ${images.length}`} </SlideIndicator>
            </>
            )}     
        </CarouselContainer> 

    )

}

export default Carousel;