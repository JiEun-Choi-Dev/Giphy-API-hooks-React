import React from "react";
import GifCard from "./GifCard";
import styled from "styled-components";

const GifList = ({ gifs }) => {
  const List = gifs.map((gif) => {
    return <GifCard key={gif.id} gif={gif}></GifCard>;
  });

  return <LayoutStyled>{List}</LayoutStyled>;
};
const LayoutStyled = styled.div`
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  width: 1400px;
  margin: 0 auto;
  justify-content: center;
  height: auto;
  padding: 1% 0;
`;

export default GifList;
