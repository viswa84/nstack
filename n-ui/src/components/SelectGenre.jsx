import React from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { fetchDataByGenre } from "../store";
// import { getGenres } from "../store";

const SelectGenre = ({ genres, type }) => {
  const dispatch = useDispatch();
  return (
    <Select
      className="flex"
      onChange={(e) => {
        dispatch(fetchDataByGenre({ genre: e.target.value, type }));
      }}
    >
      {genres.map((genre) => {
        return (
          <option value={genre.id} key={genre.id}>
            {genre.name}
          </option>
        );
      })}
    </Select>
  );
};

const Select = styled.select`
  margin-left: 4rem;
  cursor: pointer;
  font-size: 1.5rem;
  background-color: rgba(0, 0, 0, 0.4);
  color:white;

`;

export default SelectGenre;
