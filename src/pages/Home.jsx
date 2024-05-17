import styled from 'styled-components'
import Banner from "../components/Banner"
import Card from "../components/Card"
import Image_banner from '../assets/IMG.png'


const HomeWrapper = styled.div`
  display: flex; 
  flex-direction: column; 
  margin: auto;
  width: 90%;  

`

function Home() {
  return (
  <HomeWrapper>
      <Banner
       image = {Image_banner}
       title = "Chez vous, partout et ailleurs"        
      />
      <Card/> 
  </HomeWrapper>
  );
}

export default Home;
