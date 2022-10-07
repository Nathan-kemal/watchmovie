import React, {useEffect, useState} from 'react';
import Container from "../../layout/Container.jsx";
import Movielist from "../../components/movielist/movielist.jsx";
import Slider from "../../components/Slider/Slider.jsx";

import {movieType, Category, tvType} from "../../api/movieDb.js";

function Home(props) {


    return (
        <div style={{background: '#100F10', color: '#FFFF'}}>
            <Slider/>

            <Container>
                <h3> popular movies</h3>
                <Movielist category={Category.movie} type={movieType.popular}/>
            </Container>

            <Container>
                <h3> Top rated movies</h3>
                <Movielist category={Category.movie} type={movieType.top_rated}/>
            </Container>

            <Container>
                <h3> On Air TV</h3>
                <Movielist category={Category.tv} type={tvType.on_the_air}/>
            </Container>

            <Container>
                <h3> Top rated TV</h3>
                <Movielist category={Category.tv} type={tvType.top_rated}/>
                <br/>
                <br/>
                <br/>

            </Container>


        </div>
    );
}

export default Home;
