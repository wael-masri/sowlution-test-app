import { styled } from "styled-components";
import { BsTwitter } from "react-icons/bs";

export const Container = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 5px;
`;

export const ButtonMedia = styled.div`
  display: flex;
  padding: 0px 5px;
  gap: 5px;
  border-radius: 3px;
  align-items: center;
  background-color: ${({ theme }) => theme.TWITTERBTNCOLOR};
  color: ${({ theme }) => theme.WHITECOLOR};
  font-size: 12px;
`;
export const IconTwitterStyled = styled(BsTwitter)``;
export const LabelButton = styled.span``;
export const ToolTipLabelStyled = styled.div`
  background-color: ${({ theme }) => theme.WHITECOLOR};
  color: ${({ theme }) => theme.RIMARYTEXTCOLOR};
  padding: 0px 5px;
  font-size: 12px;
  align-items: center;
  border-radius: 3px;
  position: relative;
  border: 2px solid ${({ theme }) => theme.BORDERSCOLOR};

  &::before {
    content: "";
    width: 0;

    height: 0;
    position: absolute;
    border-bottom: solid 5px transparent;
    border-top: solid 5px transparent;
    border-left: solid 5px transparent;
    border-right: solid 5px white;
    left: -10px;
    top: 7px;
  }
`;
