import styled from "styled-components";

export const InformationCharacterBase = styled.section`
display:flex;
width:100%;
height:100%;
flex-direction:column;
`
export const Header = styled.header`
display:flex;
width:90%;
padding:1rem;
` 
export const Information = styled.div`
display:flex;
flex-direction:column;
gap:1rem;
width:100%;
justify-content:center;
align-items:center;
h2{
    color:var(--highlight);
    font-weight:600;
}
`
export const CardsMovies = styled.article`
display:flex;
flex-direction:row;
align-self:center;
justify-content:center;
padding-top:2rem;
height:100%;
width:100%;
flex-wrap: wrap;
font-weight: 900;
gap:2.5rem;

// Responsividade dos cards
// Desktop
// Telas Extremamente grandes
@media(max-width: 120rem) {
    max-width: 112.5rem;
}
// Telas grandes
@media(max-width: 100rem) {
    max-width:92.5rem;
}
// Telas medias
@media (max-width: 75rem) {
    max-width:67.5rem;
}
`

