import { styled } from "styled-components";


export const BoxHeaderStyled = styled.div`
border: 2px solid ${({theme}) => theme.BORDERSCOLOR};
border-radius: 5px;
padding: 12px 8px;
line-height: 150%;
margin: 0 15px;
`;
export const TextBox = styled.p`
padding: 0;
color: ${({theme}) => theme.RIMARYTEXTCOLOR};

`;
export const BolderText = styled.span`
font-weight: bold;
`;
export const UnderLineText = styled.span`
text-decoration: underline;
`;