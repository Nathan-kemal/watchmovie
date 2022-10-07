import React from 'react';
import styled from "@emotion/styled";

const GenreContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 150px;
  column-gap: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
`;
const Genre = styled.div`
  border: 1px solid;
  text-align: center;
  border-radius: 15px;
`;

function GenreList({genres}) {
    return (
        <GenreContainer>
            {
                genres.map(genre => <Genre key={genre.id}><p>{genre.name}</p></Genre>)
            }
        </GenreContainer>
    );
}

export default GenreList;