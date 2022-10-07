import React from 'react';
import styled from '@emotion/styled'
import {image_link} from "../../constant/constant.js";


import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {motion} from "framer-motion";
import {Autoplay, FreeMode, Pagination} from "swiper";
import Button from "../button/button.jsx";


const StyledSwiper = styled(Swiper)`
  width: 100%;
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


const StyledContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 150px;
  overflow: hidden;


`;
const Cast = styled.img`
  height: 200px;
  object-fit: cover;
  border-radius: 15px;

`;

function Castlist({casts}) {
    return (
        <StyledSwiper
            slidesPerView={5}
            spaceBetween={10}
            freeMode={true}

            modules={[FreeMode]}

        >
            {casts && casts.map(cast => <SwiperSlide key={cast.id}>
                <Cast src={image_link.card + cast.profile_path} key={cast.id}/>
                <p>{cast.name}</p>
            </SwiperSlide>)}


        </StyledSwiper>

    );
}

export default Castlist;