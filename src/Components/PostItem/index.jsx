import React from "react";
import { Container, DescriptionStyled, DateStyled, Title } from "./Style";
import Highlighter from "react-highlight-words";
const PostItem = ({ item,highlight }) => {
  return (
    <Container>
      <Title>
      <Highlighter
       searchWords={[highlight]}
       autoEscape={true}
       textToHighlight={item?.title}
  />
      </Title>
      <DateStyled>{item?.date}</DateStyled>
      <DescriptionStyled>
      <Highlighter
       searchWords={[highlight]}
       autoEscape={true}
       textToHighlight={item?.description}
  />
      </DescriptionStyled>
    </Container>
  );
};

export default PostItem;
