import React, {useRef, useState} from 'react';
import Header from "../../components/header/header.jsx";
import posterImage from '../../assets/series.jpg'
import styled from "@emotion/styled";
import Container from "../../layout/Container.jsx";
import SearchInput from "../../components/search";
import {useNavigate, useNavigation, useParams} from "react-router-dom";
import {movieDb, movieType} from "../../api/movieDb.js";
import Movielist from "../../components/movielist/movielist.jsx";
import {Pagination} from "@mui/material";
import PaginationComponent from "../../components/pagination/pagination";
import Card from "../../components/card/card.jsx";
import {image_link} from "../../constant/constant.js";
import {useMutation, useQuery, QueryClient, useQueryClient} from "@tanstack/react-query";
import {Category as cat} from '../../api/movieDb.js'
import {motion} from "framer-motion";

const PosterImageContainer = styled.div`
  height: 200px;
`;

const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const MovieListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 220px);
  overflow: hidden;
`

function Category(props) {
    const searchRef = useRef();
    const navigate = useNavigate()
    const {catagory} = useParams();
    const [page, setPage] = useState(1)

    const {isLoading, error, data, isPreviousData, isFetching} = useQuery([`${catagory}`, page], () =>
        catagory === cat.movie ? movieDb.getMovies(movieType.popular, page) :
            movieDb.getTv(movieType.popular, page), {keepPreviousData: true}
    )


    const queryClient = useQueryClient()


    function handleSearch(e) {
        e.preventDefault()
        if (searchRef.current.value !== '') {
            const query = searchRef.current.value;
            navigate(`/search/${catagory}/${query}`)
        }
    }

    function handlePage(e, value) {
        e.preventDefault();
        if (!isPreviousData) {
            setPage(value)
        }
    }


    return (
        <motion.div
            initial={{opacity: 0, x: 100}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: -100}}
            transition={{duration: 2}}

        >
            <Header/>
            <PosterImageContainer>
                <Image src={posterImage}/>
            </PosterImageContainer>

            <Container>
                <SearchInput handleSearch={handleSearch} inputRef={searchRef}/>
                <MovieListContainer>
                    {data && data.results.map(movie => <Card key={movie.id} id={movie.id} category={catagory}
                                                             title={movie.title ? movie.title : movie.name}
                                                             img={image_link.card + movie.poster_path}/>)}
                </MovieListContainer>

                {data && <PaginationComponent total_page={data.total_pages} change={handlePage}/>}
            </Container>

        </motion.div>
    );
}

export default Category;