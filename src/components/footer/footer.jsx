import React from 'react';
import posterImage from '../../assets/poster.jpg'
import styled from "@emotion/styled";


const StyledFooter = styled.div`
  height: 300px;
  width: 100%;
  overflow: hidden;

`;
const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;
function Footer(props) {
    return (
        <StyledFooter>
            <Image src={posterImage} alt='image not found'/>
        </StyledFooter>
    );
}

export default Footer;