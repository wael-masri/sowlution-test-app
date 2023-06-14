import { styled } from "styled-components";


export const Container = styled.div`
width: 100%;
border-bottom: 2px solid ${({theme}) => theme.BORDERSCOLOR};
padding: 40px 0;
`;
export const Title = styled.div`
text-transform: capitalize;
color: ${({theme}) => theme.RIMARYTEXTCOLOR};
font-weight: 600;
font-size: 25px;
margin: 10px 0;
`;
export const DateStyled = styled.div`
font-style: italic;
margin: 10px 0;
color: ${({theme}) => theme.RIMARYTEXTCOLOR};
`;
export const DescriptionStyled = styled.div`
margin: 10px 0;
line-height: 150%;
color: ${({theme}) => theme.RIMARYTEXTCOLOR};
`;