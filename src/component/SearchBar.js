import React, { useState } from "react";
import styled from "styled-components";
const SearchBar = (props) => {
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(25);

  const onInputChange = (e) => {
    setQuery(e.target.value);
  };

  const onSelectChange = (e) => {
    setLimit(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    props.onSearch(query, limit);
  };

  return (
    <LayoutStyled>
      <br />
      <p>FIND A GIF IMAGE WITH GIPHY </p>
      <form onSubmit={onFormSubmit}>
        <input
          id="search-input"
          type="text"
          placeholder="search for GIF"
          onChange={onInputChange}
        />
        <select id="limit-input" defaultValue={limit} onChange={onSelectChange}>
          <option value="5">5</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
        <button className="button" onClick={onFormSubmit}>
          Search
        </button>
      </form>
    </LayoutStyled>
  );
};

const LayoutStyled = styled.div`
  height: 200px;
  background-color: #7f5a83;
  background-image: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);
  border-bottom: 2px solid #fff;
  p {
    font-size: 26px;
    font-weight: bold;
    color: #fff;
  }

  #search-input {
    border-radius: 6px;
    width: 400px;
    height: 40px;
    border: 2px solid #fff;
    padding: 1px;
    box-sizing: content-box;
  }

  #limit-input {
    border-radius: 6px;
    width: 100px;
    height: 46px;
    border: 2px solid #fff;
    margin-left: 10px;
  }
  button {
    border-radius: 6px;
    width: 100px;
    height: 46px;
    border: 2px solid #fff;
    margin-left: 10px;
    background-color: #0d324d;
    color: #fff;
    font-size: 16px;
  }
`;
export default SearchBar;
