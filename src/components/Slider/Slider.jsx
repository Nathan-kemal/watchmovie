import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import React, {useEffect, useState} from 'react';
import styled from "@emotion/styled";
import Button from "../button/button.jsx";
import {motion} from 'framer-motion'
import {movieDb, movieType} from "../../api/movieDb.js";
import {image_link} from "../../constant/constant.js";

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100vh;
  color: #fff;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  filter: blur(0.5px);
`;

const Detail = styled(motion.div)`
  width: 600px;
  margin-top: 300px;
  margin-left: 100px;
`;


function Slider(props) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
         async function getTop() {
           const movie = await movieDb.getMovies(movieType.popular)
             if(movie != null){
                setMovies(movie.results)

             }
        }
       getTop()
    }, [])

    return (

        <div>
            <StyledSwiper
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}
                autoplay={{
                    delay: 6500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                className='mySwiper'
            >
                {movies.map(movie => <SwiperSlide key={movie.id} className='slide-swiper'>
                    <Image
                        src={ image_link.backdrop + movie.backdrop_path}/>

                    <Detail
                        initial={{x: 0}}
                        animate={{x: 100}}
                        transition={{
                            type: "spring",
                            stiffness: 100,

                        }}

                    >
                        <h1>{movie.title}</h1>
                        <h3>
                            {movie.overview.slice(0,200)}...
                        </h3>

                        <Button title={'Watch Trailer'}/>
                    </Detail>
                </SwiperSlide>)}


            </StyledSwiper>
        </div>
    );
}

export default Slider;