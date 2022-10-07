import React from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styled from "@emotion/styled";
import {FreeMode} from "swiper";
import {image_link} from "../../constant/constant.js";

const StyledSwiper = styled(Swiper)`
  width: 100%;
  color: #fff;
`;

const Image = styled.img`
  height: 200px;
  object-fit: cover;
  border-radius: 15px;

`;

function CustomSwipper({datas, numberofPreview}) {
    return (
        <div>

            <StyledSwiper
                slidesPerView={numberofPreview}
                spaceBetween={10}
                freeMode={true}
                modules={[FreeMode]}

            >
                {datas && datas.map(data => <SwiperSlide key={data.id}>
                    <Image src={image_link.card + data.poster_path} key={data.id}/>
                    <p>{data.name}</p>
                </SwiperSlide>)}


            </StyledSwiper>

        </div>
    );
}

export default CustomSwipper;