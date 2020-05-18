import React, { useState } from "react";
import Giphy from "../api/Giphy";
import GifList from "./GifList";
import SearchBar from "./SearchBar";
import styled from "styled-components";

const Contain = () => {
  const [state, setState] = useState({ gifs: [] });

  const search = async (query, limit) => {
    const result = await Giphy.get("/v1/gifs/search", {
      params: {
        api_key: "ZCqFmJOKeCnm6P08k6k1Ikv9Tajkofel",
        q: query,
        limit: limit,
        offset: 0,
        rating: "G",
        lang: "en",
      },
    });
    setState({ gifs: result.data.data });
  };
  return (
    <LayoutStyled>
      <SearchBar onSearch={search}></SearchBar>
      <GifList gifs={state.gifs}></GifList>
    </LayoutStyled>
  );
};

const LayoutStyled = styled.div`
  background-color: #273b59;
  height: 100%;
`;

export default Contain;
