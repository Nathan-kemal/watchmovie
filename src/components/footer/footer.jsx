import React from 'react';
import posterImage from '../../assets/poster.jpg'
import styled from "@emotion/styled";
import Container from "../../layout/Container.jsx";


const StyledFooter = styled.div`
  height: 300px;
  width: 100%;
  overflow: hidden;

`;
const Image = styled.img`
  object-fit: cover;
  height: 300px;
  width: 100%;
  position: absolute;
`;

function Footer(props) {
    return (
        <StyledFooter>
            <Image src={posterImage} alt='image not found'/>


            <div style={{
                color: 'white',
                fontSize: '20px',
                position: 'absolute',
                background: 'black',
                opacity: '0.6',
                width: '100%',

            }}>
                <Container style={{
                    display: 'flex',
                    height: '300px',

                }}>

                </Container>
                <h3
                    style={{
                        position: 'absolute',
                        left: '50%',
                        bottom: '10px',
                        zIndex: '1'
                    }}
                >
                    Copyright © 2022 Nathan Kemal</h3>
            </div>

        </StyledFooter>
    );
}

export default Footer;