import styled from 'styled-components'

export const HomeBase = styled.section`
display:flex;
flex-direction:column;
width:100%;
height:100%;
`

export const Title = styled.header`
display:flex;
align-items:center;
justify-content:center;
width:100%;
`
export const SearchBar = styled.section`
display:flex;
align-items:center;
justify-content:center;
width:100%;
`
export const AllCardsCharacter = styled.article`
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

export const NotFound = styled.section`
display:flex;
flex-direction:column;
align-items:center;
/* justify-content:center; */
width:100%;
height:100%;
svg{
    width:18%;
    path{
        fill:var(--detail);
    }
}
h2{
    text-align:center;
    /* justify-content:center; */
    color:var(--accent);
}

// Responsividade dos cards
// Desktop
// Telas Extremamente grandes
@media(max-width:50rem) {
    svg{
        width:60%;
    }
}
`