import React, {useEffect, useState} from 'react';
import Container from "../../layout/Container.jsx";
import Movielist from "../../components/movielist/movielist.jsx";
import Slider from "../../components/Slider/Slider.jsx";
import styled from "@emotion/styled";
import {movieType, Category, tvType} from "../../api/movieDb.js";
import SearchInput from "../../components/search.jsx";



const Paragraph = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: large;

`;

function Home(props) {


    return (
        <div style={{background: '#100F10', color: '#FFFF'}}>
            <Slider/>


            <Container>

                <Paragraph> popular movies</Paragraph>
                <Movielist category={Category.movie} type={movieType.popular}/>
            </Container>

            <Container>
                <Paragraph> Top rated movies</Paragraph>
                <Movielist category={Category.movie} type={movieType.top_rated}/>
            </Container>

            <Container>
                <Paragraph> On Air TV</Paragraph>
                <Movielist category={Category.tv} type={tvType.on_the_air}/>
            </Container>

            <Container>
                <Paragraph> Top rated TV</Paragraph>
                <Movielist category={Category.tv} type={tvType.top_rated}/>
                <br/>
                <br/>
                <br/>

            </Container>


        </div>
    );
}

export default Home;
