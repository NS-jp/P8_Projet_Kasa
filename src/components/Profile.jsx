import styled from 'styled-components'

const ProfileContainer = styled.div`
    display: flex; 
    gap: 10px; 
    justify-content: flex-end;
    margin-bottom: 20px;  
`

const HostName = styled.span`
    font-size: 18px;
    font-weight: 500;
    line-height: 25.67px;
    font-size: 18px; 
    text-align: right;
    color: #FF6060;

  @media (max-width: 767px) {
    font-size: 12px;    
    line-height: 17.11px;    
  }  


`

const HostImage = styled.img`
  height: 64px;
  width: 64px;
  align-self: center;
  border-radius: 50%;

  @media (max-width: 767px) {
    height: 32px;
    width: 32px;        
  }  


`

const NameItems = styled.div`
  display:flex; 
  flex-direction: column;
`



function Profile ({picture, name}) {
  const [firstName, lastName] = name.split(" ")

  return (
    <ProfileContainer>
      <NameItems> 
        <HostName>{firstName}</HostName>
        <HostName>{lastName}</HostName>
      </NameItems>
      <HostImage src={picture} alt="host" />
    </ProfileContainer>
)}

export default Profile;