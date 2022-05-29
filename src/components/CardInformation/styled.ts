import styled from "styled-components";

export const CardInformationBase = styled.article`
display:flex;
width:58rem;
height:18rem;
padding:2rem;
background-color:var(--detail);
border:0.1rem solid var(--highlight);
border-radius:0.5rem;
@media (max-width: 50rem) {
    flex-direction:column;
    width:18rem;
    height:30rem;
}
`

export const IconAndTitle = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
gap:2rem;
width:40%;
height:100%;
svg{
    width:80%;
    height:65%;
    path{
            transition: 0.2s;
            stroke:var(--accent);
    }   
}
h1{
    font-size:2rem;
    font-weight:500;
    margin:0;
}
@media (max-width: 50rem) {
    width:100%;
    svg{
        width:40%;
    }
    h1{
        font-size:1.5rem;
    }
}
`

// Informações
export const Informations = styled.section`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
width:60%;
height:50%;
margin:0;
h1{
    font-size:1.6rem;
    font-weight:600;
    color:var(--highlight)
}

@media (max-width: 50rem) {
    width:100%;
    height:100%;
    h1{
        font-size:1.3rem;
    }
}
`
export const Content = styled.div`
display:flex;
justify-content:space-between;
flex-direction:row;
width:100%;
height:100%;
@media (max-width: 50rem) {
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
    text-align:center;
    h3{
        margin:0;
        
    }
}
`
export const Data = styled.div`
display:flex;
margin:0;
.field{
    color:var(--highlight);
}
`