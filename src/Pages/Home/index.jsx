import React, { useEffect, useState } from "react";
import {
  Container,
  Wrapper,
  WrapperBoxDescHeader,
  WrapperSearch,
  WrapperSearchInput,
  LabelCountPosts,
  Bolded,
  WrapperPosts,
} from "./Style";
import {
  DescriptionHeaderBox,
  GlobalTitle,
  PostItem,
  SearchInput,
} from "../../Components";
import { posts } from "../../Assets/data";

const Home = () => {
  const [dataList, setDataList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [keySearch, setKeySearch] = useState("");

  useEffect(() => {
    setDataList(posts);
    setFilterList(posts);
  }, []);

  const handleChangeInputSearch = (e) => {
    const query = e.target.value;
    setKeySearch(e.target.value);
    // Avoid filter for empty string
    if (keySearch === "") {
      setFilterList(dataList);
    }

    const filteredPost = dataList.filter(
      (post) =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilterList(filteredPost);
  };

  const handleEmptyInput = () => {
    setKeySearch("");
    setFilterList(posts);
  };
  return (
    <Container>
      <Wrapper>
        <WrapperSearch>
          <GlobalTitle title="search" />
          <WrapperSearchInput>
            <SearchInput
              type="text"
              placeholder="Search posts..."
              onChange={handleChangeInputSearch}
              keySearch={keySearch}
              setKeySearch={setKeySearch}
              handleEmptyInput={handleEmptyInput}
            />
          </WrapperSearchInput>

          <LabelCountPosts>
            <Bolded>
              {filterList.length < 2
                ? `${filterList.length} post`
                : `${filterList.length} posts`}
            </Bolded>{" "}
            were found.
          </LabelCountPosts>

          <WrapperPosts>
            {filterList.length !== 0 &&
              filterList.map((item, index) => {
                return (
                  <PostItem key={index} item={item} highlight={keySearch} />
                );
              })}
          </WrapperPosts>
        </WrapperSearch>
        <WrapperBoxDescHeader>
          <DescriptionHeaderBox />
        </WrapperBoxDescHeader>
      </Wrapper>
    </Container>
  );
};

export default Home;
