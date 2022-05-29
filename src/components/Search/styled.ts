import styled from 'styled-components'

export const SearchBase = styled.article`
display:flex;
align-items:center;
padding:0.5rem;
padding-right:1.5rem;
padding-left:1rem;
background-color:var(--detail);
width:30rem;
height:1.7rem;
border-radius:0.5rem;
border:0.1rem solid var(--accent);
cursor: pointer;

svg{
    path{
        fill:var(--highlight);
    }
}

@media(max-width:50rem) {
    width:20rem;
}
`
export const InputSearch = styled.input`
display:flex;
padding-left:1rem;
width:100%;
height:100%;
border:none;
background-color:var(--detail);
:focus{
    outline: none;
}

// Editar placeholder
font-weight: 500;
font-size:1rem;

@media(max-width:50rem) {
    width:95%;
}
`