import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.BACKGROUNDCOLOR};
`;
export const Wrapper = styled.div`
  display: flex;
  padding: 30px 15px;
`;
export const WrapperSearch = styled.div`
  flex: 3;
`;
export const WrapperBoxDescHeader = styled.div`
  flex: 1;
`;
export const LabelCountPosts = styled.span``;
export const Bolded = styled.span`
  font-weight: 600;
`;
export const WrapperSearchInput = styled.div`
  width: 95%;
  height: 40px;
  margin: 30px 0;
`;

export const WrapperPosts = styled.div`
  width: 95%;
`;
