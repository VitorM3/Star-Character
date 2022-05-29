import styled from "styled-components";

export const CardMoviesBase = styled.article`
display:flex;
flex-direction:column;
width:16rem;
height:16rem;
background-color:var(--detail);
border-radius:0.5rem;
border:0.1rem solid var(--highlight);

`
export const NumberMovie = styled.h1`
display:flex;
width:100%;
height:30%;
align-items:center;
justify-content:center;
font-size:4rem;
font-weight:bold;
color: var(--highlight);
margin:0;
padding-top:3rem;
`
export const Content = styled.div`
display:flex;
width:100%;
align-items:center;
text-align:center;
justify-content:center;
flex-direction:column;
margin:0;
.year{
    color:var(--accent);
    font-weight:600;
}
`