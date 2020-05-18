import React from "react";
import styled from "styled-components";
const GifCard = ({ gif }) => {
  const style = {
    background: `url(${gif.images.downsized.url}) 50% 50% no-repeat`,
  };

  return (
    <LayoutStyled>
      <div style={style}></div>
    </LayoutStyled>
  );
};

const LayoutStyled = styled.div`
  div {
    margin: 10px;
    width: 250px;
    height: 250px;
    cursor: pointer;
  }
`;

export default GifCard;
