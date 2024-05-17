import styled from 'styled-components'
import StarActive from '../assets/star-active.png'
import StarInactive from '../assets/star-inactive.png'


const RatingContainer = styled.div`
    display: flex; 
    
    @media (max-width: 767px) { 
        align-items: center;   
  }  
`

const StarImg = styled.img`
   @media (max-width: 767px) {
    width: 18px;
    height: 18px;       
  }  
`

function Rating ({score}) {
    const range = [1, 2, 3, 4, 5]

  return (
    <RatingContainer>
        {range.map((rangeElem) =>
                <span key={rangeElem.toString()}>
                  <StarImg
                        src={rangeElem <= score ? StarActive : StarInactive}
                        alt={rangeElem <= score ? "active star" : "inactive star"}
                    />
                </span>
            )}
    </RatingContainer>
)}

export default Rating;