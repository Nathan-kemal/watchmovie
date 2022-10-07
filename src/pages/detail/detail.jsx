import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled'
import {useParams} from 'react-router-dom'
import {movieDb} from "../../api/movieDb.js";
import {image_link} from "../../constant/constant.js";
import {motion} from "framer-motion";

import GenreList from "../../components/genrelist/genreList.jsx";
import Castlist from "../../components/castlist/castlist.jsx";
import Container from "../../layout/Container.jsx";
import Header from "../../components/header/header.jsx";
import Similar from "../../components/similar/similar.jsx";

const DetailContainer = styled(motion.div)`
  color: #FFFFFF;
  display: flex;
  position: absolute;
  top: 200px;
  left: 150px;
  width: 1080px;
  z-index: 1;

`;


const ImageContainer = styled.div`
  width: 300px;
  height: 450px;
  border-radius: 15px;
  overflow: hidden;

`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;

`;

const DetailPage = styled.div`
  background: #100F10;
  height: 500vh;
`;

const Poster = styled.img`
  height: 400px;
  width: 100%;
  object-fit: cover;
  filter: blur(2px);

`
const OverLay = styled.div`
  width: 80%;
  height: 450px;
  background: #100F10;
  z-index: -1;
  position: absolute;
  opacity: .5;
  filter: blur(20px);
`;
const Videos = styled.div`
  color: #FFFFFF;
  margin-top: 300px`;


function Detail(props) {
    const [movieInfo, setMovieInfo] = useState([]);
    const [castInfo, setCastInfo] = useState([]);
    const [videos, setVideos] = useState([]);

    const [isLoading, setisLoading] = useState(true);
    const {catagory, id} = useParams()

    useEffect(() => {

        async function getData() {
            const response = await movieDb.detail(catagory, id, {});
            if (response !== undefined) {
                setMovieInfo(response);
                setisLoading(false)
                getCast()
                getMovieVideos()
            }
        }

        async function getCast() {
            const response = await movieDb.credits(catagory, id, {});
            if (response !== undefined) {
                setCastInfo(response);

            }
        }

        async function getMovieVideos() {
            const response = await movieDb.getVideos(catagory, id, {});
            if (response !== undefined) {
                setVideos(response.results.slice(0,3));
                console.log(response)
            }
        }

        getData()

    }, [])

    return (
        <DetailPage>
            <Header/>
            {isLoading && <h1>Loading</h1>}
            <div>
                {movieInfo && <div>
                    <Poster src={image_link.backdrop + movieInfo.backdrop_path}/>
                    <DetailContainer>
                        <ImageContainer>
                            <Image src={image_link.card + movieInfo.poster_path}/>
                        </ImageContainer>
                        <div style={{
                            width: '700px',
                            marginLeft: '10px'
                        }}>
                            <OverLay/>
                            <h1>{movieInfo.title}</h1>

                            {movieInfo.genres && <GenreList genres={movieInfo.genres}/>}
                            <p>{movieInfo.overview}</p>

                            <h1>Cast</h1>
                            {castInfo && <Castlist casts={castInfo.cast}/>}
                        </div>
                    </DetailContainer>
                </div>}
            </div>
            <Videos>
                <Container>
                    {videos && videos.map(video => <VideoPlayer key={video.id} id={video.key} name={video.name}/>)}

                </Container>
            </Videos>

            <Similar category={catagory} id={id}/>
        </DetailPage>

    );
}


function VideoPlayer ({name, id}){
    return <div>
        <h1>{name}</h1>
        <iframe allowFullScreen={true} style={{
            width: '100%',
            height: '100vh'
        }} src={'https://www.youtube.com/embed/' + id}/>
    </div>
}

export default Detail;