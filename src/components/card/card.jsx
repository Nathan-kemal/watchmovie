import React, {useState} from 'react';
import styled from '@emotion/styled';
import {motion} from "framer-motion";
import {Link, useLocation, useParams} from "react-router-dom";
import {FcStart} from 'react-icons/fc'
const Container = styled(motion.div)`
  width: 150px;
  text-align: start;
  color: #CD104D;
  &:hover {
    cursor: pointer;
  }

`;


const ImageContainer = styled.div`
  width: 200px;
  height: 250px;
  border-radius: 15px;
  overflow: hidden;


`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;


`;

const Card = ({img, title, category, id }) => {

    const [overlay, setOverlay] = useState({display: 'none'})


    function showOverlay() {
        setOverlay({
            display: 'flex',
            height: '250px',
            width: '200px',
            overflow: 'hidden',
            background: 'white',
            opacity: '0.6',
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '15px',
        })
    }

    function hideOverlay() {
        setOverlay({display: 'none'})
    }


    const location = useLocation();
    let url;
    if(location.pathname === '/'){
        url =   location.pathname  + category + '/' +id;
    } else if(location.pathname.match('/search/')){
        url = '/' + category + '/' + id;
    }
    else{
        url = location.pathname  + '/' + id;
    }



    return (
        <Link  to={url} style={{
            textDecoration: 'none'
        }}>

        <Container
            onMouseEnter={showOverlay}
            onMouseLeave={hideOverlay}
            whileTap={{scale: 0.9}}
        >
            <ImageContainer>
                <div style={overlay}>
                        <FcStart size={70}/>
                </div>
                <Image src={img}/>
            </ImageContainer>

            <h4>{title} </h4>

        </Container>
        </Link>
    );
};

export default Card;
