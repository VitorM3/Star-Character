import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
body{
    background-color:var(--background);
    box-sizing: border-box;
    margin:0;
    padding:0;
}

h1,h2,h3,h4,h5,h6,p,input{
    font-family: 'Spline Sans Mono', monospace;
    color:var(--text);
    font-weight:400;
}

:root{
  --background:#070C17;
  --detail:#071F45;
  --accent:#0E8BC1;
  --highlight:#32FCE4;
  --text:#F0F8FF;
}
`
export default GlobalStyles