import styled from 'styled-components' 

const TagContainer = styled.div`
    display: flex; 
    column-gap: 10px; 
    margin-bottom: 30px; 
    
    @media (max-width: 767px) {   
        margin-bottom: 10px;   
  }  

`
const Taglist =styled.li`
    list-style: none; 
    background-color: #FF6060; 
    font-size: 14px;
    font-weight: 700;
    color: #FFFFFF; 
    border-radius: 10px; 
    padding: 5px 25px; 

    @media (max-width: 767px) {   
        font-size: 10px;
        padding: 5px 20px;   
  }  


`


function Tags ({tags}) {
  return (
    <TagContainer>
        {tags.map((tag, index)=>(
        <Taglist key={`${tag}-${index}`}>
            <li>{tag}</li>
        </Taglist>
    ))}
    </TagContainer>
)}

export default Tags;
