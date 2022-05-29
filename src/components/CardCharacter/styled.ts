import styled from 'styled-components'

export const CardCharacterBase = styled.article`
display:flex;
flex-direction:column;
padding:1.5rem;
width:14.5rem;
height:13.5rem;
background-color:var(--detail);
border-radius:0.5rem;
border:0.2rem solid var(--accent);
transition: 0.2s;
&:hover{
    border-color:var(--highlight);
    svg{
        path{
            stroke:var(--highlight);
        }
        
    }
}
cursor: pointer;


`
export const IconDeffault = styled.div`
display:flex;
align-items:center;
justify-content:center;
padding-top:2rem;
svg{
    width:50%;
    height:100%;
    path{
            transition: 0.2s;
            stroke:var(--accent);
    }   
}
`
export const Title = styled.footer`
display:flex;
height:100%;
align-items:flex-end;
h1{
    display:flex;
    margin:0;
    width:100%;
    align-items:center;
    justify-content:center;
    font-size:1.3rem;
    text-align:center;
}

`