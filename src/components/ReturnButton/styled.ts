import styled from "styled-components"

export const ReturnButtonBase = styled.button`
display:flex;
border-radius:100%;
width:3.5rem;
height:3.5rem;
background-color:var(--detail);
border:none;
align-items:center;
justify-content:center;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
svg{
    path{
        fill:var(--accent)
    }
}

&:hover{
    svg{
    path{
        fill:var(--highlight)
    }
}
}
`