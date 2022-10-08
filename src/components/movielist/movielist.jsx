import React, {useEffect, useState} from 'react';
import Card from "../card/card.jsx";
import styled from "@emotion/styled";
import {Category, movieDb, movieType} from "../../api/movieDb.js";
import {image_link} from "../../constant/constant.js";


function Movielist({category, type, style}) {
    const [data, setData] = useState([]);

    const MovieListContainer = styled.div`
      display: grid;
      grid-auto-flow: column;
      grid-gap: 60px;
      overflow: hidden;
    `
    useEffect(() => {
        const getData = async () => {
            if (category === Category.movie) {
                const movie = await movieDb.getMovies(type, {})
                if (movie != null) {setData(movie.results)

                }
            } else if (category === Category.tv) {
                const tv = await movieDb.getTv(type, {})
                if (tv != null) {
                    setData(tv.results)


                }
            }
        }
        getData();
    }, [])
    return (
        <MovieListContainer>
            {data.map(movie => <Card key={movie.id} id={movie.id} category={category} title={movie.title ? movie.title : movie.name}
                                     img={image_link.card + movie.poster_path}/>)}
        </MovieListContainer>
    );
}

export default Movielist;