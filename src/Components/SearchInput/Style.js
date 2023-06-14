import styled from "styled-components";
import {IoIosCloseCircle} from "react-icons/io";

export const WrapperInput = styled.div`
position: relative;
width: 100%;
height: 100%;
`;
export const InputText = styled.input`
 border: none;
 width: 100%;
 font-size: 16px;
 border-radius: 5px;
 height: 100%;
 padding: 0px 20px;
 font-weight: 600;
 color: ${({ theme }) => theme.TEXTCOLOR1};
 height: ${({height}) => height};
  border: 2px solid ${({theme}) => theme.BORDERSCOLOR};
  background-color: ${({theme}) => theme.BACKGROUND1};
  ::-webkit-outer-spin-button,::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:focus{
   outline: none;
   border-color: ${({theme}) => theme.BORDERSCOLOR};
   
  }
  
  
`;

export const CloseIconStyled = styled(IoIosCloseCircle)`
position: absolute;
top: 12px;
right: 15px;
color: ${({theme}) => theme.SECONDARYTEXTCOLOR};
`