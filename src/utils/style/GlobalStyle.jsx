import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-weight: <weight>;
        font-style: normal;
    }

    body {
        margin: 0;
    }
`

function GlobalStyle() {
  return <StyledGlobalStyle/>
}

export default GlobalStyle