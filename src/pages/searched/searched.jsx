import React from 'react';
import Card from "../../components/card/card.jsx";
import {image_link} from "../../constant/constant.js";
import {useQuery} from "@tanstack/react-query";
import {movieDb} from "../../api/movieDb.js";
import {useParams, useNavigate} from "react-router-dom";
import styled from "@emotion/styled";
import {Container} from "@mui/material";
import Header from "../../components/header/header.jsx";
import posterImage from "../../assets/series.jpg";
import {FcLeft} from 'react-icons/fc'
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

const BackButton = styled(motion.div)`
  display: inline-block;

  &:hover {
    cursor: pointer;
  }
`;

function Searched(props) {
    const {catagory, query} = useParams();
    const navigation = useNavigate();
    const searched = useQuery(['searched'], () => movieDb.search(catagory, query));

    function handleBackButton() {
        navigation(-1);
    }
    return (
        <div>
            <Header/>
            <PosterImageContainer>
                <Image src={posterImage}/>
            </PosterImageContainer>
            <Container>
                <BackButton
                    whileHover={{scale: 1.2}}
                    whileTap={{scale: 0.9}}
                    onClick={handleBackButton}
                >
                    <FcLeft size={40}/>
                </BackButton>

                <MovieListContainer>
                    {searched.data && searched.data.results.map(movie => <Card key={movie.id} id={movie.id}
                                                                               category={catagory}
                                                                               title={movie.title ? movie.title : movie.name}
                                                                               img={image_link.card + movie.poster_path}/>)}
                </MovieListContainer>
            </Container>
        </div>
    );
}

export default Searched;